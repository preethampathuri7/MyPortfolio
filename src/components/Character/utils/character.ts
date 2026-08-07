import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

// ─── Long Female Hair Flowing From Under Cap ─────────────────────────────────
function buildFemaleHairUnderCap(): THREE.Group {
  const hairGroup = new THREE.Group();
  hairGroup.name = "FemaleHairUnderCap";

  const hairMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#1a0c06"), // dark espresso brown
    roughness: 0.25,
    metalness: 0.04,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
  });

  const addMesh = (
    geo: THREE.BufferGeometry,
    mat: THREE.Material,
    pos: [number, number, number],
    rot: [number, number, number] = [0, 0, 0]
  ) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(...pos);
    m.rotation.set(...rot);
    hairGroup.add(m);
    return m;
  };

  // Long Left Hair Strand
  addMesh(new THREE.CylinderGeometry(0.10, 0.17, 1.25, 16), hairMat, [-0.28, -0.32, 0.08], [0.10, 0, 0.22]);

  // Long Right Hair Strand
  addMesh(new THREE.CylinderGeometry(0.10, 0.17, 1.25, 16), hairMat, [0.28, -0.32, 0.08], [0.10, 0, -0.22]);

  // Curtain Bangs
  addMesh(new THREE.TorusGeometry(0.20, 0.05, 12, 24, Math.PI * 0.65), hairMat, [-0.14, 0.18, 0.28], [-0.3, 0.2, -1.75]);
  addMesh(new THREE.TorusGeometry(0.20, 0.05, 12, 24, Math.PI * 0.65), hairMat, [0.14, 0.18, 0.28], [-0.3, -0.2, 1.75]);

  // Back Cascading Hair
  addMesh(new THREE.CylinderGeometry(0.32, 0.40, 1.3, 18), hairMat, [0, -0.38, -0.26], [-0.10, 0, 0]);

  // High Ponytail Tail
  addMesh(new THREE.CylinderGeometry(0.10, 0.18, 0.85, 16), hairMat, [0, -0.05, -0.58], [0.70, 0, 0]);

  // Cyan Hair Tie
  const tieMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#38bdf8"),
    emissive: new THREE.Color("#0284c7"),
    emissiveIntensity: 2.2,
    roughness: 0.1,
  });
  addMesh(new THREE.TorusGeometry(0.06, 0.02, 10, 22), tieMat, [0, 0.25, -0.38], [1.2, 0, 0]);

  return hairGroup;
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          `/models/character.enc?t=${Date.now()}`,
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);

            // ── 1. STYLE THE CAP & FEMALE OUTFIT ──
            character.traverse((child: any) => {
              if (!child.isMesh) return;
              const mesh = child as THREE.Mesh;
              const name = (mesh.name || "").toUpperCase();

              // Cap styling
              if (name.includes("CAP")) {
                mesh.visible = true;
                mesh.scale.set(1, 1, 1);
                if (name === "CAP.001" || name.includes("001")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#ec4899"),
                    roughness: 0.35,
                    metalness: 0.1,
                  });
                } else if (name === "CAP.002" || name.includes("002")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#38bdf8"),
                    roughness: 0.2,
                    metalness: 0.3,
                  });
                }
                return;
              }

              // Hide male short hair
              if (name === "HAIR") {
                mesh.visible = false;
                return;
              }

              // ── FEMALE DRESS / FROCK ──
              if (name.includes("SHIRT") || name.includes("BODY")) {
                mesh.material = new THREE.MeshPhysicalMaterial({
                  color: new THREE.Color("#f472b6"),
                  emissive: new THREE.Color("#831843"),
                  emissiveIntensity: 0.22,
                  roughness: 0.3,
                  clearcoat: 0.6,
                });
              } else if (name.includes("PANT")) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color("#e879f9"),
                  roughness: 0.5,
                });
              } else if (name.includes("SHOE") || name.includes("SOLE")) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color("#db2777"),
                  roughness: 0.2,
                });
              } else if (
                name.includes("FACE") ||
                name.includes("NECK") ||
                name.includes("HAND") ||
                name.includes("EAR")
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color("#fcd5ce"),
                  roughness: 0.45,
                });
              } else if (name.includes("EYEBROW")) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color("#1a0c06"),
                  roughness: 0.9,
                });
              }

              mesh.castShadow = true;
              mesh.receiveShadow = true;
            });

            // ── 2. ATTACH LONG FEMALE HAIR ──
            const femaleHair = buildFemaleHairUnderCap();

            const headTarget =
              character.getObjectByName("spine006") ||
              character.getObjectByName("spine.006") ||
              character.getObjectByName("Face.002") ||
              character.getObjectByName("metarig.002") ||
              null;

            if (headTarget) {
              headTarget.add(femaleHair);
              femaleHair.position.set(0, 0.02, 0.02);
              femaleHair.scale.set(1.0, 1.0, 1.0);
            } else {
              character.add(femaleHair);
              femaleHair.position.set(0, 13.2, 0.02);
              femaleHair.scale.set(1.0, 1.0, 1.0);
            }

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();

            if (character.getObjectByName("footR")) {
              character.getObjectByName("footR")!.position.y = 3.36;
            }
            if (character.getObjectByName("footL")) {
              character.getObjectByName("footL")!.position.y = 3.36;
            }

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("GLTF load error:", error);
            reject(error);
          }
        );
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
