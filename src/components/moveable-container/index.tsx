import * as React from "react";
import { createElement } from "react";
import Moveable from "react-moveable";

import { Button } from '@alifd/next';

export default function App(props) {
  const { _leaf, componentId } = props;
  console.log('_leaf: ', _leaf);
  if (_leaf?.parent) {
    _leaf.parent.isRGLContainerNode = true;
  }
  window.parent.AliLowCodeEngine.config.set('enableMouseEventPropagationInCanvas', true);


  // React.Children.map(children, (child) => {

  //   const _child = React.cloneElement(child, {id: componentId});
  //   const leaf = window.parent.AliLowCodeEngine.project.currentDocument.getNodeById(_child.props.componentId);
  //   leaf.isRGLContainerNode = true;
  //   console.log('leaf from componentname: ', leaf);
  //   console.log('_leaf: ', _child.props._leaf);

  //   if (leaf?.parent) {
  //     leaf.parent.isRGLContainer = true;
  //     leaf.parent.isRGLContainerNode = true;
  //     console.log('leaf.parent: ', leaf.parent);
  //   }

  //   _children.push(<>
  //     {_child}
  //     <Moveable
  //       target={`#${componentId}`}
  //       throttleResize={1}
  //       renderDirections={["nw","n","ne","w","e","sw","s","se"]}
  //       draggable
  //       throttleDrag={1}
  //       edgeDraggable={false}
  //       startDragRotate={0}
  //       throttleDragRotate={0}
  //       onDragStart={() => {
  //         window.parent.AliLowCodeEngine.config.set('enableMouseEventPropagationInCanvas', true);
  //       }}
  //       onDrag={e => {
  //           window.parent.AliLowCodeEngine.config.set('enableMouseEventPropagationInCanvas', true);
  //           console.log('e: ', e);
  //       }}

  //     />
  //   </>);
  // });

  const targetRef = React.useRef();

  return (
    <div style={{width: 500, height: 500}} {...props}>
      <div className="react-resizable-handle"  ref={targetRef}>

        <Button >123</Button>
      </div>
      <Moveable
        target={targetRef}
        draggable
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        scalable
        keepRatio={false}
        throttleScale={0}
        snappable
        snapDirections={{"top":true,"left":true,"bottom":true,"right":true}}
        snapThreshold={5}
        verticalGuidelines={[50,150,250,450,550]}
        horizontalGuidelines={[0,100,200,400,500]}
        onDrag={e => {
            e.target.style.transform = e.transform;
        }}
        onScale={e => {
            e.target.style.transform = e.drag.transform;
        }}
      />
    </div>
  );
}


