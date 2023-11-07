


/**
 * 
 * <div>
 * <div>
 * <h1>im h1 tag</h1>
 * <h2>im an h1 tag</h1>
 * <div>
 * <div>
 * reactelement creating a objet
 * Reactelement(object)=>html(browser understnd) 
 * 
 * 
 * 
 * 
 * 
 */
    const parent=React.createElement( "div",  {id:"parent"},[
     React.createElement( "div",{id:"child"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag"),  
     ]),

    React.createElement( "div",{id:"child2"},[
     React.createElement("h1",{},"im h1 tag"),
     React.createElement("h2",{},"im h2 tag"),

]),
]);

//jsx exist


//const heading=React.createElement(
 //   "h1",
//{ id:"heading", xyz:"abc"},
// "hello world from react"
// );
console.log(parent);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);