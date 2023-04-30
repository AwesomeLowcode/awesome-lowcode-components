import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

const MoveableContainer: IPublicTypeComponentMetadata = {
  componentName: 'MoveableContainer',
  title: 'MoveableContainer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@ablula/awesome-lowcode-components',
    version: '0.1.0',
    exportName: 'MoveableContainer',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
    ],
    supports: {
      style: true,
      condition: false,
      loop: false
    },
    component: {
      isContainer: true,
      isMinimalRenderUnit: true
    },
    advanced: {
      callbacks: {
        // onNodeRemove: (node, currentNode) => {
        //   node.document.selection.clear();
        //   currentNode?.setPropValue('removedItem', node?.id)
        // },
        // onNodeAdd: (node, currentNode) => {
        //   const { dropLocation } = node?.document || {};
        //   const { canvasX, canvasY } = dropLocation.event;
        //   const { width, height } = dropLocation.detail.edge;

        //   const x1 = (canvasX - width / 2) / (width / 2);
        //   const y1 = 1 - (canvasY / height) * 2;

        //   const camera = new PerspectiveCamera(
        //     25,
        //     window.innerWidth / window.innerHeight,
        //     0.1,
        //     2000,
        //   );
        //   const cameraPosition = currentNode.getPropValue('camera.position');
        //   if (cameraPosition) {
        //     camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
        //   } else {
        //     camera.position.set(0, 8, 30);
        //   }
        //   camera.lookAt(0, 0, 0);
        //   camera.updateMatrixWorld(true);
        //   const clipCoord = new Vector3(x1, y1, 0.99);
        //   const targetCoord = clipCoord.unproject(camera);

        //   if (node?.componentName.endsWith('Light')) {
        //     node.setPropValue('position', targetCoord.toArray());
        //     return;
        //   }


        //   const vec = targetCoord.clone().sub(camera.position.clone());

        //   const t = -targetCoord.y/vec.y;

        //   const result = new Vector3(targetCoord.x + t*vec.x, 0, targetCoord.z + t*vec.z);

        //   const defaultTransform = node?.getPropValue('defaultTransform');
        //   if (defaultTransform?.[1]) {
        //     console.log('defaultTransform: ', defaultTransform)
        //     result.setY(result.y + defaultTransform[1])
        //   }

        //   node.setPropValue('position', result.toArray());
        // },
      },
    }
  },
  snippets: [
    {
      title: '容器',
      screenshot: '/public/screenshots/directional.png',
      schema: {
        title: '容器',
        componentName: 'MoveableContainer',
        props: {
          
        }
      }
    }
  ]
};

export default [
  MoveableContainer,
];
