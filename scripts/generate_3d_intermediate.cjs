const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationIntermediate.data.ts');

const intermediateMCQs = [
  {
    id: 1,
    topic: "Deformation-Friendly Topology",
    question: "Why are concentric circular edge loops placed around the eye sockets and mouth corners of a character mesh?",
    options: [
      "To allow the face to deform and stretch smoothly during facial expressions and phoneme articulation without surface creasing or triangular pinching",
      "To speed up GPU render times by 90%",
      "To automatically calculate rigid body collisions for teeth",
      "To prevent the character from casting shadow rays in Cycles"
    ],
    correctAnswer: 0,
    explanation: "Concentric edge loops mimic facial muscle groups (orbicularis oris and orbicularis oculi), providing natural anatomical deformation flow lines during blinking, smiling, and speech."
  },
  {
    id: 2,
    topic: "Texel Density in UV Mapping",
    question: "What is 'Texel Density' in 3D texturing and why must it remain consistent across all assets in a scene?",
    options: [
      "The amount of RAM occupied by the .blend file on disk",
      "The ratio of 2D texture pixels (texels) to 3D surface area (e.g. 10.24 px/cm); consistency ensures all objects appear with matching visual sharpness and texture resolution",
      "The speed of light bounce calculations in the Eevee Next shader core",
      "The weight assigned to bones during automatic skinning"
    ],
    correctAnswer: 1,
    explanation: "Texel density measures texture resolution per unit of 3D surface area. Inconsistent texel density makes some objects look blurry while adjacent objects look razor-sharp, breaking visual cohesion."
  },
  {
    id: 3,
    topic: "Procedural Shader Nodes",
    question: "In Blender's Shader Editor, what is the effect of routing a Noise Texture through a ColorRamp node into the Roughness input of a Principled BSDF?",
    options: [
      "It makes the object completely transparent glass",
      "It creates non-uniform surface roughness variation (smudges, fingerprints, worn patches) where dark ColorRamp values become glossy and light values become matte",
      "It causes the mesh to emit red photon particles into the scene",
      "It flips the camera view to an orthographic angle"
    ],
    correctAnswer: 1,
    explanation: "A ColorRamp remaps procedural noise into a grayscale value range (0.0 to 1.0), driving realistic micro-roughness variations across the object surface."
  },
  {
    id: 4,
    topic: "Character Silhouette & Readability",
    question: "Why is evaluating a character's silhouette in pure unlit black (Solid mode with flat black matcap) a core animation principle?",
    options: [
      "Because human vision processes silhouette shape and line-of-action before interior facial details, ensuring the character's pose and emotion are instantly readable",
      "Because black silhouettes require 0 bytes of memory",
      "To check whether the camera lens needs to be cleaned in real life",
      "To remove all bone constraints from the armature"
    ],
    correctAnswer: 0,
    explanation: "Strong silhouettes ensure clear staging. If an audience cannot understand a character's pose, gesture, or intent from their silhouette alone, the pose is cluttered and weak."
  },
  {
    id: 5,
    topic: "IK vs FK Kinematics",
    question: "In character rigging, what is the fundamental functional difference between Inverse Kinematics (IK) and Forward Kinematics (FK)?",
    options: [
      "FK solves bone chains from the root downwards (e.g. rotate shoulder -> elbow follows -> hand follows); IK solves the chain backwards from the end effector target (e.g. place hand on table -> shoulder and elbow calculate automatically)",
      "IK is only used for rendering fire particles; FK is used for camera zooming",
      "FK permanently bakes all vertex weights to 1.0; IK deletes the armature hierarchy",
      "IK can only operate on 2D grease pencil strokes"
    ],
    correctAnswer: 0,
    explanation: "FK articulates each joint sequentially from parent to child (great for swinging arms in flight), while IK pins the extremity to a target goal and solves the intermediate joint angles (ideal for feet planted on floors)."
  },
  {
    id: 6,
    topic: "Weight Painting Normalization",
    question: "Why is 'Weight Normalization' essential when painting deformation weights for a rigged character mesh?",
    options: [
      "It scales the 3D model to real-world metric meters",
      "It guarantees that the sum of all bone influence weights for every single vertex equals exactly 1.0 (100%), preventing mesh tearing or collapsed vertices during extreme posing",
      "It converts all quads into equilateral triangles",
      "It bakes the character's diffuse texture directly into vertex colors"
    ],
    correctAnswer: 1,
    explanation: "If a vertex has a total weight less than 1.0, it won't follow bones fully and will lag behind; if over 1.0, it will over-transform. Normalization ensures the sum of all influences equals 1.0."
  },
  {
    id: 7,
    topic: "Walk Cycle 4 Core Poses",
    question: "What are the four quintessential poses that comprise a standard biped walk cycle in sequential order?",
    options: [
      "Contact Pose -> Down Pose (Compression) -> Passing Pose -> Up Pose (Push-off/Apex)",
      "Jump Pose -> Flight Pose -> Crash Pose -> Rest Pose",
      "Idle Pose -> Sprint Pose -> Slide Pose -> Recovery Pose",
      "Left Hand Pose -> Right Hand Pose -> Head Turn -> Eye Blink"
    ],
    correctAnswer: 0,
    explanation: "A standard walk cycle transitions through Contact (both feet touching ground, legs furthest apart), Down (lowest pelvis height, weight absorbed), Passing (one leg swings past supporting leg), and Up (highest pelvis elevation, rear foot push-off)."
  },
  {
    id: 8,
    topic: "Pelvis and Spine Mechanics in Locomotion",
    question: "During the Passing Pose of a character's walk cycle, how does the pelvis naturally tilt to support the character's weight?",
    options: [
      "The pelvis remains perfectly horizontal with zero degree rotation on all axes",
      "The pelvis drops slightly on the unsupported swinging-leg side while tilting upward on the supporting weight-bearing leg side to maintain balance over the center of mass",
      "The pelvis spins 180 degrees backward",
      "The pelvis scale increases by 200% along the X axis"
    ],
    correctAnswer: 1,
    explanation: "The hip drops on the free-swinging leg side while the supporting hip rises and shifts over the planted foot to carry the body's center of gravity."
  },
  {
    id: 9,
    topic: "Facial Phonemes & Visemes",
    question: "When animating speech for dialogue lip-sync, what is a 'Viseme'?",
    options: [
      "The visual mouth, lip, and jaw shape corresponding to a specific audio phoneme or group of acoustic sounds (e.g. 'M/B/P' closed lips, 'O/U' rounded lips)",
      "An audio compressor plugin inside the Video Sequence Editor",
      "A special lens filter that makes eyes sparkle in Cycles",
      "A physics simulation for cloth collars"
    ],
    correctAnswer: 0,
    explanation: "A viseme is the visual facial manifestation of an audible phoneme. In lip sync, animators key visual mouth shapes (visemes) aligned slightly ahead of the corresponding sound."
  },
  {
    id: 10,
    topic: "Lip-Sync Timing Rules",
    question: "Why should an animator key mouth shapes (visemes) 1 to 2 frames BEFORE the corresponding audio waveform peak rather than exactly on the peak?",
    options: [
      "Because humans visually anticipate and shape their mouths before air passes through the vocal cords to produce sound, and visual cognition is faster than audio comprehension",
      "Because Blender's audio engine has a mandatory 2-frame hardware latency",
      "Because video streaming platforms delay visual frames during compression",
      "To prevent the audio file from clipping past 0 dB"
    ],
    correctAnswer: 0,
    explanation: "In real speech, lips and jaws form the required shape 1-2 frames prior to the sound escaping the mouth. Keying on or after the audio peak creates the uncanny impression that the audio is leading the puppet."
  },
  {
    id: 11,
    topic: "Animation Polish: Overlapping Action",
    question: "In character animation, how does 'Overlapping Action' differ from simultaneous uniform motion?",
    options: [
      "Different parts of the body move and settle at different rates and offsets (e.g. hips stop first, torso settles next, arms drag behind, and hair/clothing settles last)",
      "All joints in the skeleton start and stop on the exact same frame",
      "Two characters occupy the exact same 3D spatial coordinates",
      "Keyframes are deleted from the Dope Sheet to speed up export"
    ],
    correctAnswer: 0,
    explanation: "Overlapping action breaks rigid robotic movement: when a character stops walking, the heavy torso arrests first, while loose appendages (arms, ponytail, belt) continue forward due to inertia and settle several frames later."
  },
  {
    id: 12,
    topic: "Cinematic Camera: Dolly vs Zoom",
    question: "What is the key visual difference between a physical 3D Camera Dolly (translating the camera forward in space) versus an Optical Zoom (narrowing the camera focal length)?",
    options: [
      "A Dolly changes spatial parallax and perspective relationships between foreground and background objects; an Optical Zoom simply magnifies the image without altering perspective parallax",
      "A Dolly disables scene lighting; a Zoom adds motion blur",
      "A Dolly only works in 2D animation; a Zoom requires a ray-tracing GPU",
      "There is zero visual difference between a Dolly and a Zoom in 3D"
    ],
    correctAnswer: 0,
    explanation: "Moving the camera physically (dolly) alters the viewing angle and creates parallax (near objects move past faster than far objects). Changing focal length (zoom) magnifies the field of view without changing perspective perspective vectors."
  },
  {
    id: 13,
    topic: "Render Passes & Compositing",
    question: "What is the purpose of rendering an Ambient Occlusion (AO) pass alongside the standard Combined beauty pass?",
    options: [
      "To isolate micro-contact shadows in corners, crevices, and ground contacts, allowing precise contrast enhancement and grounding in the Compositor",
      "To automatically create sound effects for footstep contacts",
      "To double the camera focal length during playback",
      "To convert all textures to 8-bit black and white"
    ],
    correctAnswer: 0,
    explanation: "An AO pass calculates soft contact shadowing in tight crevices where ambient diffuse light cannot easily reach, giving artists fine control over depth and grounded weight in post-production compositing."
  },
  {
    id: 14,
    topic: "Asset Linking vs Appending",
    question: "In a collaborative 3D production pipeline, what is the core advantage of 'Linking' an external character asset into a shot file rather than 'Appending' it?",
    options: [
      "Linking references the master source asset dynamically, so any updates made to the master character model or rig automatically propagate across all 50 animation shots in the film",
      "Linking permanently deletes the original character file from the hard drive",
      "Appending allows real-time cloud rendering without a graphics card",
      "Linking converts all bones into rigid body physics simulations"
    ],
    correctAnswer: 0,
    explanation: "Linking creates a non-destructive reference. If the character modeler tweaks a texture or fixes a bone constraint on the master asset, every shot file referencing that linked asset updates automatically."
  },
  {
    id: 15,
    topic: "Shape Keys & Blend Shapes",
    question: "In Blender, what is a 'Shape Key' (Blend Shape) and how is it used in facial animation?",
    options: [
      "A saved geometric vertex offset state relative to the base mesh (e.g. 'Smile', 'Blink_L') that can be dialed in smoothly with a 0.0 to 1.0 weight slider",
      "A password used to encrypt proprietary .blend files",
      "A special keyboard key that triggers timeline playback",
      "A modifier that deletes quad topology during rendering"
    ],
    correctAnswer: 0,
    explanation: "Shape keys store target vertex displacement configurations without altering topology, allowing animators to smoothly blend facial expressions and muscle flexes using keyframed numeric sliders."
  },
  {
    id: 16,
    topic: "Subdivision Surface Supporting Loops",
    question: "When using the Subdivision Surface modifier on a hard-surface prop, what is the purpose of adding tight 'Supporting Edge Loops' (Holding Edges) near a corner?",
    options: [
      "To constrain the Catmull-Clark algorithm from rounding the edge into an extreme organic curve, maintaining a crisp, light-catching chamfer",
      "To increase the mass of the object for rigid body physics",
      "To prevent textures from loading into RAM",
      "To lock the object to the world origin (0,0,0)"
    ],
    correctAnswer: 0,
    explanation: "Subdivision algorithms smooth across wide vertex gaps. Placing supporting loops close to a corner tightens the tension, keeping hard-surface mechanical edges defined and crisp under subdivision."
  },
  {
    id: 17,
    topic: "Color Temperature in Motivated Lighting",
    question: "In cinematic 3D lighting, what color temperature contrast is typically established between warm key sunlight and cool ambient skylight fill?",
    options: [
      "Warm golden Key light (approx. 3200K - 4500K) paired with cool atmospheric blue Fill light (approx. 6500K - 8000K), creating depth through complementary color contrast",
      "Pure monochromatic magenta for both Key and Fill lights",
      "0 Kelvin Key light with 100,000 Kelvin Fill light",
      "All lights must strictly be set to 5000K neutral white with zero color difference"
    ],
    correctAnswer: 0,
    explanation: "Contrasting warm directional illumination (sun/candle) with cool ambient fill (skylight/shadow reflection) is a fundamental cinematic lighting technique that enhances three-dimensional volume and mood."
  },
  {
    id: 18,
    topic: "Armature Bone Roll & Pole Vectors",
    question: "If a character's knee or elbow flips backward or twists unnaturally when manipulating an IK target, which armature property needs adjustment?",
    options: [
      "The Bone Roll angle and the Pole Target Offset angle on the IK Constraint",
      "The render output resolution percentage",
      "The Timeline start frame number",
      "The Principled BSDF Subsurface Scattering radius"
    ],
    correctAnswer: 0,
    explanation: "IK solvers require a Pole Target (e.g., knee or elbow control) to establish the joint's hinge bending direction. Mismatched bone roll or pole angles cause joints to flip or twist."
  },
  {
    id: 19,
    topic: "Pose Libraries & Action Stash",
    question: "How does Blender's Pose Library in the Asset Browser accelerate character animation production?",
    options: [
      "It allows animators to store, catalog, preview, and apply standardized hand grips, facial expressions, and locomotion extremes onto rigs with one click",
      "It automatically renders the scene to YouTube",
      "It converts 3D models into 3D printable STL files",
      "It disables all timeline keyframing permanently"
    ],
    correctAnswer: 0,
    explanation: "The Pose Library lets animators store reusable poses (e.g. fist, relaxed hand, angry brows, walk contact) and blend them onto any character rig in seconds."
  },
  {
    id: 20,
    topic: "Spacing & Timing Charts",
    question: "In classical animation spacing, what does 'Slow-Out' (Ease-Out) signify on an animation spacing chart?",
    options: [
      "The object leaves a stationary pose gradually with densely clustered frames near the start, accelerating as frame spacing widens toward the midpoint",
      "The character stops moving completely and falls asleep",
      "The render engine slows down to prevent CPU overheating",
      "The camera rotates counter-clockwise around the Y axis"
    ],
    correctAnswer: 0,
    explanation: "Slow-out means accelerating away from a rest pose: frames are close together at the beginning (slow velocity) and space out wider as the object gains momentum."
  },
  {
    id: 21,
    topic: "PBR Metallic vs Non-Metallic Reflectance",
    question: "Why should the Metallic slider in the Principled BSDF almost always be set to strictly 0.0 (dielectric) or 1.0 (pure metal) in standard PBR materials?",
    options: [
      "Because in real physics, pure materials are either non-conducting dielectrics (wood, plastic, stone, skin) or conductors (gold, steel, copper); intermediate values are physically non-existent except for semi-conductors or thin dust layers",
      "Because Blender crashes if Metallic is set to 0.5",
      "Because metallic shaders disable ray bounces in Cycles",
      "Because 0.5 metallic turns all materials neon green"
    ],
    correctAnswer: 0,
    explanation: "Physical optics dictates that materials are either conductive metals (reflecting colored specular highlights with zero diffuse) or non-conductive dielectrics (white specular reflections over colored diffuse). Binary 0 or 1 values ensure physical accuracy."
  },
  {
    id: 22,
    topic: "Camera Shake & Handheld Simulation",
    question: "How can an animator simulate realistic organic handheld camera sway in Blender without manually keyframing thousands of frames?",
    options: [
      "Add a Noise Modifier with custom scale, strength, and phase to the Camera\'s Rotation and Location F-Curves in the Graph Editor",
      "Shake the physical computer monitor during rendering",
      "Set the timeline frame rate to 120 fps",
      "Enable Constant interpolation on all camera keyframes"
    ],
    correctAnswer: 0,
    explanation: "A Noise F-Curve modifier adds procedural mathematical jitter to camera channels, creating organic handheld camera sway that can be adjusted in frequency and amplitude."
  },
  {
    id: 23,
    topic: "Cryptomatte in Post-Production",
    question: "What is the primary power of rendering a 'Cryptomatte' pass in Blender for post-production compositors?",
    options: [
      "It automatically generates clean, anti-aliased matte masks for any individual object, material, or asset in the scene directly inside the Compositor without manual rotoscoping",
      "It renders 3D scenes directly onto cryptocurrency blockchains",
      "It encrypts the video file with a secret password",
      "It doubles the CPU clock frequency during rendering"
    ],
    correctAnswer: 0,
    explanation: "Cryptomatte encodes object and material IDs into multi-channel EXR files, allowing compositors to isolate and color-grade specific characters or props instantly without complex manual masking."
  },
  {
    id: 24,
    topic: "Rig Testing: The Gimbal Lock Issue",
    question: "What is 'Gimbal Lock' in 3D rotation systems (Euler XYZ) and how can character riggers prevent it?",
    options: [
      "The loss of one degree of rotational freedom when two of the three Euler rotation axes become parallel, causing erratic flipping during animation; prevented by using Quaternion (WXYZ) rotation mode on ball joints",
      "A physical lock on the computer keyboard that prevents keyframing",
      "When a character's shoes stick permanently to a floor mesh",
      "An error caused by having more than 10 lights in a scene"
    ],
    correctAnswer: 0,
    explanation: "Gimbal lock occurs in Euler rotation math when an 90-degree axis alignment collapses two rotational planes into one. Switching bone rotation modes to Quaternions (WXYZ) eliminates gimbal lock on multi-axis ball joints."
  },
  {
    id: 25,
    topic: "Animatic Staging: The 180-Degree Rule",
    question: "In cinematic camera staging and character dialogue cutting, what is the '180-Degree Rule'?",
    options: [
      "An imaginary axis-of-action drawn between two interacting characters that the camera must not cross, ensuring characters maintain consistent left-to-right screen direction across shot cuts",
      "The camera must rotate 180 degrees every 3 seconds",
      "The scene temperature must be kept at 180 degrees Fahrenheit",
      "The camera focal length must always equal exactly 180mm"
    ],
    correctAnswer: 0,
    explanation: "The 180-degree rule preserves spatial continuity. Crossing the action line flips character eyelines and positions on screen, confusing the viewer about who is looking at whom."
  },
  {
    id: 26,
    topic: "Foot Roll Rig Controls",
    question: "In a professional character foot rig, what is a 'Reverse Foot' (Foot Roll) control system designed to automate?",
    options: [
      "It provides a single animator control that pivots the foot naturally from the heel strike, through the ball-of-the-foot roll, to the toe push-off during locomotion",
      "It reverses the playback direction of the entire scene",
      "It inverts the character's footwear colors in the shader editor",
      "It scales the character's legs in the Z axis"
    ],
    correctAnswer: 0,
    explanation: "A reverse foot setup establishes a hierarchy of bones pivoting from the heel, ball, and toe tip, allowing animators to execute natural foot peel-and-roll mechanics with a single slider or channel rotation."
  },
  {
    id: 27,
    topic: "Procedural Texturing with Voronoi",
    question: "In Blender's Shader Editor, which procedural texture node is ideal for creating cellular stone tiles, organic biological scales, or cracked mud patterns?",
    options: [
      "Voronoi Texture",
      "Checker Texture",
      "Gradient Texture",
      "White Noise Texture"
    ],
    correctAnswer: 0,
    explanation: "The Voronoi texture calculates cell Euclidean distances and feature points, making it the premier procedural node for cellular organic skins, cobblestones, scales, and cracked earth."
  },
  {
    id: 28,
    topic: "Viewport Optimization with Simplify",
    question: "How does Blender's 'Simplify' feature in the Render Properties panel enhance performance during complex character animation playback?",
    options: [
      "It temporarily caps maximum subdivision levels, disables particle child counts, and clamps texture resolutions globally in the viewport without affecting final render quality",
      "It permanently deletes 50% of the character's geometry",
      "It converts all 3D animation into static 2D JPEG images",
      "It removes all sound tracks from the project"
    ],
    correctAnswer: 0,
    explanation: "Simplify applies global overrides across all scene assets—capping subdivision surface modifiers to 0 or 1 in the viewport—allowing smooth real-time 24 fps animation playback even on dense scenes."
  },
  {
    id: 29,
    topic: "Eye Darts & Saccades",
    question: "When animating realistic human or stylized character eyes, what are 'Saccades' (Eye Darts)?",
    options: [
      "Rapid, instantaneous shifts in eye gaze (occurring over 1 to 2 frames) between focal points of interest, reflecting active cognitive thought rather than slow drifting eyes",
      "Special particle effects that shoot from a character's pupils",
      "Shaders that make the cornea reflective",
      "A type of bone constraint used in the spine"
    ],
    correctAnswer: 0,
    explanation: "Human eyes do not drift slowly between points of interest; they execute rapid micro-jumps called saccades taking only 1-2 frames, interspersed with steady fixations. Slow drifting eyes make characters look vacant or dead."
  },
  {
    id: 30,
    topic: "Editorial Pacing & Animatic Cutting",
    question: "During animatic editing, what is the primary indicator that a shot cut is occurring too quickly for the audience?",
    options: [
      "The viewer cannot identify who is in the shot, what action is being performed, or where the visual focal point shifted before the shot cuts away",
      "The render engine produces a warning about GPU memory",
      "The video player drops from 60 fps to 59.94 fps",
      "The audio volume drops below -12 dB"
    ],
    correctAnswer: 0,
    explanation: "Every shot must remain on screen long enough for the audience to orient themselves, locate the primary focal center, and absorb the storytelling action before transitioning to the next angle."
  }
];

const intermediateModuleConfigs = [
  { id: '3d-int-01', orderIndex: 1, title: 'Module 13: Advanced Modeling for Animation and Deformation', desc: 'Master clean quad topology, deformation-friendly edge flow, subdivision surface modeling, and hard-surface modifier stacks.' },
  { id: '3d-int-02', orderIndex: 2, title: 'Module 14: UV Unwrapping, Seams, and Texture Workflows', desc: 'Learn professional UV unwrapping techniques, seam placement, texel density equalization, UV island packing, and PBR texture map integration.' },
  { id: '3d-int-03', orderIndex: 3, title: 'Module 15: Procedural Materials and Shader Node Networks', desc: 'Build photorealistic and stylized procedural materials in the Shader Editor using Noise, Voronoi, ColorRamp, Bump, and Normal maps.' },
  { id: '3d-int-04', orderIndex: 4, title: 'Module 16: Character Design and Simple Character Modeling', desc: 'Design stylized characters with strong silhouettes, anatomical landmarks, appealing proportions, and deformation-ready joint topology.' },
  { id: '3d-int-05', orderIndex: 5, title: 'Module 17: Rigging Fundamentals: Armatures, Bones, and Constraints', desc: 'Construct biped and prop armatures, establish bone hierarchies, configure IK/FK solvers, pole vectors, and animator control shapes.' },
  { id: '3d-int-06', orderIndex: 6, title: 'Module 18: Weight Painting and Joint Deformation Mastery', desc: 'Master vertex groups, automatic and manual weight painting, weight normalization, and resolving shoulder, knee, and spine deformation pinching.' },
  { id: '3d-int-07', orderIndex: 7, title: 'Module 19: Character Animation Workflow: Blocking to Splining', desc: 'Implement professional character animation staging: thumbnailing, key posing, breakdown posing, spline conversion, and arc tracking.' },
  { id: '3d-int-08', orderIndex: 8, title: 'Module 20: Walk Cycles, Run Cycles, and Locomotion Mechanics', desc: 'Animate loopable biped walk and run cycles with authentic weight shifts, hip tilt, shoulder counter-rotation, and foot-peel dynamics.' },
  { id: '3d-int-09', orderIndex: 9, title: 'Module 21: Facial Animation, Shape Keys, and Lip Sync Basics', desc: 'Create expressive facial shape keys, control eye saccades and blinks, map phonemes to visemes, and synchronize dialogue performance.' },
  { id: '3d-int-10', orderIndex: 10, title: 'Module 22: Animation Timing, Spacing, and Polish Passes', desc: 'Refine motion dynamics with spacing charts, overshoot and settle, drag, overlapping action, and eliminating uniform easing curves.' },
  { id: '3d-int-11', orderIndex: 11, title: 'Module 23: Cinematic Camera Animation and Staging', desc: 'Design camera rigs, execute cinematic dollies, cranes, handheld shakes, focus pulls, and maintain narrative spatial continuity.' },
  { id: '3d-int-12', orderIndex: 12, title: 'Module 24: Lighting, Rendering Passes, and Compositing Workflows', desc: 'Elevate visual quality with motivated lighting, color temperatures, render passes (Diffuse, AO, Cryptomatte), and Blender Compositor trees.' },
  { id: '3d-int-13', orderIndex: 13, title: 'Module 25: Scene Organization, Optimization, and Production Pipelines', desc: 'Manage heavy scenes with collections, asset linking, library overrides, viewport Simplify settings, and robust versioning strategies.' },
  { id: '3d-int-14', orderIndex: 14, title: 'Module 26: Building a Complete Short Animation: End-to-End Execution', desc: 'Execute an entire animated short sequence from script and 3D animatic to final character animation, lighting, compositing, and master export.' }
];

const allIntermediateTasks = [];

intermediateModuleConfigs.forEach(m => {
  allIntermediateTasks.push({
    id: m.id,
    orderIndex: m.orderIndex,
    title: m.title,
    description: m.desc,
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      {
        id: `res-${m.id}-1`,
        title: 'Blender Intermediate Animation Reference',
        type: 'documentation',
        url: 'https://docs.blender.org/manual/en/latest/animation/index.html'
      },
      {
        id: `res-${m.id}-2`,
        title: 'Studio Rigging and Character Case Studies',
        type: 'article',
        url: 'https://studio.blender.org/training/'
      }
    ],
    lessonContent: {
      overview: `### ${m.title}\n${m.desc}\n\nThis intermediate module advances your technical execution and artistic precision in Blender character animation and production pipelines.`,
      analogyHero: 'Moving from beginner to intermediate 3D animation is like transitioning from learning basic musical scales to performing dynamic orchestral jazz: you now orchestrate dozens of bones, curves, textures, and cameras in perfect rhythmic harmony.',
      objectives: [
        'Master intermediate 3D principles and specialized Blender tools relevant to this discipline.',
        'Execute production-standard workflows with clean non-destructive methodologies.',
        'Diagnose and resolve common technical bottlenecks in rigging, animation curves, and shader networks.',
        'Integrate assets smoothly into an end-to-end multi-shot studio production pipeline.'
      ],
      estimatedTime: '50 mins',
      syntaxGuide: 'Intermediate Production Protocols:\n1. Topology      -> Maintain clean quads and concentric loops at deforming hinges.\n2. Rigging       -> Implement IK/FK switching, pole vectors, and standardized bone rolls.\n3. Animation     -> Key contact, down, passing, and up poses; polish in Graph Editor.\n4. Shading/Light -> Balance PBR roughness/metallic values and contrast warm/cool light temperatures.',
      sections: [
        {
          id: `sec-${m.id}-1`,
          title: 'Advanced Theoretical Framework & Principles',
          difficulty: 'Intermediate',
          content: 'Deep exploration of industry-standard workflows, mechanical physics, and artistic techniques required for professional character performance and asset creation.',
          codeSnippets: [
            {
              language: 'python',
              filename: `${m.id.replace(/-/g, '_')}_automation.py`,
              title: 'Production Python Automation Script',
              code: `import bpy\n\n# Set up specialized parameters for ${m.title}\nrig = bpy.context.active_object\nif rig and rig.type == 'ARMATURE':\n    bpy.ops.object.mode_set(mode='POSE')\n    print("Configured pose workspace for advanced animation.")`,
              explanation: 'Automates workspace preparation for character animation and rigging operations.'
            }
          ],
          proTip: 'Always test character deformation through extreme poses (90-degree arm bends, full leg stretches) before starting final scene animation.',
          commonMistakes: [
            'Skipping bone roll verification before generating IK solvers, causing flipped knees.',
            'Over-complicating facial shape keys without establishing a strong neutral base.'
          ],
          miniPractice: {
            question: `What is the primary technical rule reinforced in ${m.title}?`,
            options: [
              'Maintaining clean quad topology, normalized weights, and natural physical timing',
              'Deleting all camera constraints',
              'Disabling the Outliner completely',
              'Using only unlit viewport renders'
            ],
            correctAnswer: 0,
            explanation: 'Clean topology, normalized deformation weights, and physical timing form the bedrock of intermediate 3D animation.'
          }
        },
        {
          id: `sec-${m.id}-2`,
          title: 'Practical Step-by-Step Studio Workflow',
          difficulty: 'Intermediate',
          content: 'Step-by-step breakdown of setup, tool execution, parameter tuning, and troubleshooting procedures inside Blender 4.x.',
          codeSnippets: [
            {
              language: 'text',
              filename: 'intermediate_workflow.txt',
              title: 'Step-by-Step Action Workflow',
              code: `1. Verify asset scale and apply transforms (Ctrl+A).\n2. Establish IK/FK controls and verify pole angle alignment.\n3. Animate primary body mechanics and balance in Stepped/Constant mode.\n4. Convert to Bezier curves in Graph Editor and polish arcs and settles.`,
              explanation: 'Systematic intermediate pipeline checklist.'
            }
          ],
          proTip: 'Use Blender\'s Motion Paths feature (Object Properties -> Motion Paths -> Calculate) to visually track and smooth the spatial arc of wrists, feet, and the head.',
          commonMistakes: [
            'Splining an animation too early before the primary storytelling poses are approved.',
            'Ignoring hip translation on the horizontal X and Z axes during walk cycles.'
          ],
          miniPractice: {
            question: 'What Blender feature allows you to visually draw the spatial motion arc of a character\'s hand through 3D space?',
            options: [
              'Motion Paths (Calculate Paths in Pose Mode)',
              'Auto Smooth',
              'Remesh Modifier',
              'Color Management'
            ],
            correctAnswer: 0,
            explanation: 'Motion Paths draws a continuous visual trajectory curve in the 3D viewport showing the exact spatial path of any bone or object.'
          }
        },
        {
          id: `sec-${m.id}-3`,
          title: 'Troubleshooting & Production Quality Review',
          difficulty: 'Intermediate',
          content: 'Industry troubleshooting strategies for fixing sliding feet, popping IK knees, weight painting bleeding, and shader artifacts.',
          codeSnippets: [
            {
              language: 'text',
              filename: 'troubleshooting_matrix.txt',
              title: 'Intermediate Technical Troubleshooting Guide',
              code: `Problem                  | Root Cause                   | Solution
-------------------------|------------------------------|-----------------------------------
Flipping Knee on Walk    | IK Pole Angle Mismatch       | Adjust Pole Angle in IK Constraint (-90° / 90°)
Foot Sliding on Ground   | Premature Splining / Float   | Lock Location Keyframes on Contact frames
Mesh Tearing at Armpit   | Unnormalized Vertex Weights  | Weight Paint -> Weights -> Normalize All
Texture Blurriness       | Low Texel Density            | Scale UV Island in UV Editor to match scene density`,
              explanation: 'Quick diagnosis table for intermediate technical challenges.'
            }
          ],
          proTip: 'Always check your character animation against a grid floor to ensure grounded contact with zero feet penetration or sliding.',
          commonMistakes: [
            'Forgetting to lock IK foot bones during grounded contact frames.',
            'Using uncompressed MP4 files for intermediate compositing passes.'
          ],
          miniPractice: {
            question: 'How do you fix an IK knee that points sideways instead of forward during a walk cycle?',
            options: [
              'Adjust the Pole Angle setting in the Inverse Kinematics bone constraint property panel',
              'Delete the character\'s head bone',
              'Reduce the render resolution',
              'Disable ambient occlusion'
            ],
            correctAnswer: 0,
            explanation: 'The Pole Angle parameter rotates the IK solver\'s planar solution to point the knee directly towards the pole target.'
          }
        }
      ],
      keyTakeaways: [
        'Intermediate 3D animation integrates anatomy, body mechanics, rigging constraints, and curve manipulation.',
        'Locomotion requires precise coordination of pelvis drops, hip tilts, shoulder counter-rotation, and foot peels.',
        'Consistent texel density and motivated lighting produce professional visual polish.'
      ],
      summary: `You have successfully completed ${m.title}, mastering intermediate 3D animation and rigging proficiencies.`
    }
  });
});

// Add Intermediate Project
allIntermediateTasks.push({
  id: '3d-int-p1',
  orderIndex: 15,
  title: 'Intermediate Capstone Project: Stylized Character Walk Cycle',
  description: 'Create a fully realized, loopable 24-to-32 frame stylized character walk cycle featuring clean biped rigging, natural body mechanics, hip tilt, shoulder counter-rotation, foot peels, lighting, and final rendered output. (10 Core Deliverables).',
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  xpReward: 500,
  level: 'intermediate',
  projectDetails: {
    id: '3d-int-p1',
    title: 'Stylized Character Walk Cycle',
    description: 'Model or assemble a stylized biped character, construct a functional armature rig with IK/FK legs and foot roll controls, and animate a seamless, expressive walk cycle demonstrating weight, balance, personality, and clean deformation.',
    estimatedDuration: '4 hours',
    difficulty: 'Intermediate',
    deliverables: [
      '1. Rig a biped character with an armature containing IK legs, Pole Targets (knees), Reverse Foot roll controls, and FK arms.',
      '2. Paint clean deformation weights, ensuring smooth bending across knees, elbows, shoulders, and hips without volume collapse.',
      '3. Animate a seamless, loopable 24-frame (or 32-frame) walk cycle at 24 fps.',
      '4. Implement the 4 essential locomotion poses: Contact, Down (weight compression), Passing, and Up (push-off apex).',
      '5. Apply realistic pelvis translation (X/Y/Z) and lateral hip tilt over the weight-bearing planted foot.',
      '6. Implement natural shoulder counter-rotation opposing hip rotation to maintain dynamic balance.',
      '7. Animate expressive arm swings with natural elbow drag and wrist follow-through.',
      '8. Ensure zero foot sliding or ground penetration during the planted contact-to-push-off phase.',
      '9. Set up a three-point lighting pass with a clean studio backdrop and a tracking camera.',
      '10. Submit your complete .blend project file, playblast viewport preview, final 1080p rendered video, and a technical breakdown explaining your timing and spacing choices.'
    ]
  },
  lessonContent: {
    overview: '### Intermediate Capstone: Stylized Character Walk Cycle\nA convincing walk cycle is the definitive benchmark of an intermediate character animator. It requires balancing kinetic forces, physical mass, anatomical joints, and personality in a seamless repeating loop.',
    analogyHero: 'Walking is a series of controlled falls: your body tilts forward past balance, gravity pulls you down, and your stepping foot catches you just before impact. An authentic walk cycle captures this perpetual dance between falling and catching.',
    objectives: [
      'Synthesize rigging, weight painting, posing, and timing into a production character performance.',
      'Demonstrate deep comprehension of body mechanics, center of mass, and counter-rotation.',
      'Produce a portfolio-grade character locomotion piece suitable for studio review.'
    ],
    estimatedTime: '4 hours',
    syntaxGuide: 'Standard 24-Frame Walk Cycle Posing Blueprint:\n- Frame 1  : Right Foot Forward Contact (Heel strike), Left Foot Back Contact (Toe).\n- Frame 4  : Down Pose (Pelvis lowest, right foot flat, knees bent absorbing weight).\n- Frame 7  : Passing Pose (Right leg straight supporting body, Left foot swings past).\n- Frame 10 : Up Pose (Right foot on toes pushing off, pelvis at highest elevation).\n- Frame 13 : Left Foot Forward Contact (Halfway mirrored contact pose).\n- Frame 16 : Down Pose (Opposite side).\n- Frame 19 : Passing Pose (Opposite side).\n- Frame 22 : Up Pose (Opposite side).\n- Frame 25 : Frame 1 duplicate for seamless cycle wrap.',
    sections: [
      {
        id: 'sec-proj-int-1',
        title: 'Walk Cycle Production Workflow',
        difficulty: 'Intermediate',
        content: 'Follow the professional 4-stage walk cycle pipeline:\n\n1. Rig Verification: Verify IK leg snapping, reverse foot roll channels, and knee pole vector alignments.\n2. Key Posing: Set Contact (F1, F13, F25), Down (F4, F16), Passing (F7, F19), and Up (F10, F22) poses in Stepped/Constant interpolation mode.\n3. Curve Polish: Switch to Bezier curves. Adjust the Z-pelvis curve into a dual-bounce wave. Smooth the X-translation curve so the hips sway over the planted leg.\n4. Overlap & Secondary Polish: Add head bobbing delay, wrist drag, and hair/clothing follow-through.',
        codeSnippets: [
          {
            language: 'python',
            filename: 'walk_cycle_timing_verifier.py',
            title: 'Blender Python Walk Cycle Frame Evaluator',
            code: `import bpy

# Verify timeline cycle boundaries
scene = bpy.context.scene
scene.frame_start = 1
scene.frame_end = 24
scene.render.fps = 24

print("Walk cycle timeline locked to 24 frames @ 24 fps.")`,
            explanation: 'Sets standard 24-frame timeline parameters for loopable locomotion evaluation.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Pelvis movement drives the entire walk cycle: hips dip on Down and rise on Up.',
      'Opposing shoulder and hip rotations create dynamic torque and lifelike balance.',
      'Lock planted foot keys to prevent unsightly foot sliding.'
    ],
    summary: 'Complete all 10 deliverables, verify your cycle loop in the 3D viewport, and submit your walk cycle capstone.'
  },
  questions: []
});

// Add Intermediate Assessment
allIntermediateTasks.push({
  id: '3d-int-assessment',
  orderIndex: 16,
  title: 'Intermediate Final Assessment: Character Rigging & Animation Certification Exam',
  description: 'Official 30-question certification exam evaluating topology, UV mapping, shader nodes, character modeling, rigging armatures, IK/FK constraints, weight painting, locomotion mechanics, facial shape keys, and cinematic lighting. (Passing threshold: 25/30).',
  status: 'locked',
  requiresQuiz: true,
  isFinalAssessment: true,
  passingScore: 25,
  totalQuestions: 30,
  xpReward: 750,
  level: 'intermediate',
  lessonContent: {
    overview: '### Official Intermediate Certification Assessment\nDemonstrate your advanced technical and artistic mastery across all 14 Intermediate modules. Passing this exam (>= 25/30) along with completing all 14 modules and the Walk Cycle project unlocks Level 3: Advanced 3D Animation.',
    analogyHero: 'Your final threshold before entering the Masterclass Advanced tier: professional character performance, physics simulation, procedural geometry nodes, and full film production.',
    objectives: [
      'Validate rigorous knowledge of biped rigging, kinematics, weight normalization, and walk cycle mechanics.',
      'Demonstrate error diagnosis for complex deformation, F-curve splining, and compositing passes.',
      'Score at least 25/30 to earn the Intermediate Level Completion Credential.'
    ],
    estimatedTime: '45 mins',
    syntaxGuide: 'Exam Rules: Exactly 30 questions, 4 options per question, passing threshold 25/30 (83.3%).',
    sections: [],
    keyTakeaways: [
      'Read every question and scenario carefully before choosing your answer.',
      'Scoring >= 25/30 unlocks Level 3: Advanced 3D Animation Masterclass immediately.'
    ],
    summary: 'Intermediate Final Assessment instructions and rules.'
  },
  questions: intermediateMCQs
});

// Write to TypeScript file
const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const THREE_D_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(intermediateMCQs, null, 2)};

export const THREE_D_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(allIntermediateTasks, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log(`Successfully generated ${targetFile} with ${allIntermediateTasks.length} tasks and ${intermediateMCQs.length} MCQs.`);
