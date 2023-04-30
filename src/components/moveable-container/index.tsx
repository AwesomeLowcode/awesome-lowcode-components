import * as React from "react";
import { createElement } from "react";
import Moveable from "react-moveable";

import { Button } from '@alifd/next';

const MoveableWrapper = (props: any) => {
  const [selected, setSelected] = React.useState(false);
  const { children, elements } = props;
  const leaf = window.parent.AliLowCodeEngine.project.currentDocument.getNodeById(children.props.componentId);
  leaf?.document.onChangeSelection(() => {
    setSelected(false);
  });  

  const targetRef = React.useRef();

  return <>
    <div ref={targetRef} onClick={() => {
      leaf?.select?.();
      setSelected(true);
    }} style={{ position: 'fixed' }} className={`react-resizable-handle ${children.props.componentId}`}>
      {React.cloneElement(children, { ref: null, style: { ...(children.props.style || {}), pointerEvents: 'none' } })}
    </div>
    <Moveable
      className="react-resizable-handle"
      target={(selected && leaf) ? targetRef : null}
      draggable
      snappable
      bounds={{"left":0,"top":0,"right":0,"bottom":0,"position":"css"}}
      elementGuidelines={elements.filter(item => !item.includes(children.props.componentId))}
      onDrag={e => {
          e.target.style.transform = e.transform;
      }}
      onScale={e => {
          e.target.style.transform = e.drag.transform;
      }}
    />
  </>;
}

export default function App(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  const { _leaf, children, style } = props;
  if (_leaf?.parent) {
    _leaf.parent.isRGLContainerNode = true;
  }
  window.parent.AliLowCodeEngine.config.set('enableMouseEventPropagationInCanvas', true);

  const randomClassNames = [];
  React.Children.map(children, (child) => {
    randomClassNames.push(`.${child.props.componentId}`);
  })


  return (
    <div className={`moveable-container react-resizable-handle`} {...props} style={{...(style || {
      width: 1, height: 0,
      margin: -2,
    })}} ref={null}>
      {
        React.Children.map(children, (child) => {
          return <MoveableWrapper elements={randomClassNames}>{child}</MoveableWrapper>
        })
      }
    </div>
  );
}


