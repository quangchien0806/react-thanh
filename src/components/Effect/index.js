import React, { useEffect, useState } from "react";

const Effect = () => {
  const [name, setName] = useState("");

  useEffect(() =>{
    
  })

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <div>{name}</div>
      </form>
    </div>
  );
};

export default Effect;
