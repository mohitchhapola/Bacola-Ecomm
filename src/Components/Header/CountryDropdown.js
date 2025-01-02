import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import React, { useContext, useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const margecountryname = (countryname) => {
  return countryname.length > 16 ? countryname.substring(0, 16) : countryname;
};

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const context = useContext(MyContext);
  const [selectedTab, setSelectedTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter countries based on the search term
  const filteredCountries = context.countryList?.filter((item) =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCountry = (index, country) => {
    setSelectedTab(index);
    setisOpenModal(false);
    context.setSelectedCountry(country);
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== '' ? margecountryname(context.selectedCountry) : 'Select Location'}
          </span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>

      {/* Country popup */}
      <Dialog className="locationmodal" open={isOpenModal} onClose={() => { setisOpenModal(false); }} TransitionComponent={Transition}>
        <h4 className='mb-0'>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close1" onClick={() => { setisOpenModal(false); }}><IoMdClose /></Button>

        <div className="headerSearch1 w-100">
          <input
            type='text'
            placeholder="Choose your area"
            className="country-input"
            value={searchTerm}
            onChange={handleSearchChange} // Update search term on change
          />
          <Button>
            <IoSearch />
          </Button>
        </div>

        <ul className="CountryList mt-3">
          {filteredCountries?.length > 0 ? (
            filteredCountries.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectedCountry(index, item.country)}
                  className={`${selectedTab === index ? 'active' : ''}`}
                >
                  {item.country}
                </Button>
              </li>
            ))
          ) : (
            <p>No countries found</p> // Show message if no countries match the search
          )}
        </ul>

      </Dialog>
    </>
  );
};

export default CountryDropdown;
