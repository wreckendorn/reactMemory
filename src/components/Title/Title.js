import React from "react";
import "./Title.css";

const Title = props => <div>
<div className="row mb-5 mt-5 p-5">
<div className="col-4"></div>
        <div className="container-fluid">
            <h1 className="display-1 title text-center">{props.children}</h1>
    </div>
<div className="col-4"></div>
</div>
</div>
export default Title;
