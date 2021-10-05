console.log("\n--->>> Lec 3 || counter app <<<---\n");

import { useState } from "react";

const [initialValue, setValue] = useState(5);

switch (key) {
  case 5:
    console.log("useState with value 5");

    break;
  case 2:
    console.log("useState with value 2");

    break;

  default:
    console.log("no useState value is working");
    break;
}

setValue = useState(2);
