import React from 'react';
const Main = (props) => (
  <div className="relative">
    <div className="w-full bg-slate-200 md:bg-slate-50 px-0 md:px-1 pt-16 antialiased">
      {props.meta}
      <div className="mx-auto max-w-6xl">
        <div className="content py-5 text-xl">{props.children}</div>
      </div>
      
    </div>
  </div>
);

export { Main };
