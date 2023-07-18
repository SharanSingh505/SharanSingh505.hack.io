import { Input } from "@chakra-ui/react";
import React, { useState } from "react";


export function SearchBar(): JSX.Element {
    return(

        <div style={{ padding: "30px 30px 40px 0" }}>
            <Input placeholder="Type your problem here" style={{ width: "600px" }} />
        </div>

    /*
        <div style={{"padding": "30px 30px 40px 0"}}>
            <Input placeholder='Type your problem here' />;
        </div>
        */
    );


}