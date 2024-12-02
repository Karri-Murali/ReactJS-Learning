const element = React.createElement(
    "div",
    {
        className : "Pavan",
        align : "center"
    },
    "This is Pavan",
    React.createElement(
        "h1",
        {
           align : "center",
        },
        "JSX Nested Element"
    ),
    React.createElement(
        "p",
        null,
        "This is Paragraph"
    )
);
ReactDOM.render(
    element,
    document.getElementById("container")
);