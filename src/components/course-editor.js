import React from "react";
import { useHistory } from "react-router-dom";

const CourseEditor=({props})=>
    <div>

        <h2>
            <i onClick={()=>props.history.goBack()} className="fas fa-arrow-left"></i>
            Course Editor
        </h2>
        {/*<i onClick={() => props.history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}
    </div>
export default CourseEditor