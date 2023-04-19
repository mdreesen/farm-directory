import { useState } from "react";

const HeaderSearch = ({ setFarmers }: any) => {
    const [searchTerm, setSearchTerm] = useState("");
    // const { classes } = useStyles();
  
    const handleSearch = async (e: any) => {
      const term = e.currentTarget.value;
      setSearchTerm(e.currentTarget.value);
  
      if (term.length > 2 || term.length === 0) {
        const getFarmers = await fetch(`/api/farmers/${term}`);
        const getFarmersJson = await getFarmers.json();
        setFarmers(getFarmersJson);
      }
    };
  
    return (
      <div>
        <div>
            <textarea
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
              placeholder="Search"
            />
        </div>
      </div>
    );
  };
  
  export default HeaderSearch;
  