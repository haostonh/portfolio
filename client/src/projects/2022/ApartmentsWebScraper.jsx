import React from "react";
import '../../pagesCSS/Projects.css';
import HHLinkButton from "../../components/HHLinkButton";

const ApartmentsWebScraper = () => {
  return (
    <div className='projectsInfo'>
      <h2 className='projectTitle'>Apartments Web Scraper (Jul 2022 - Aug 2022)</h2>
      <ul className='projectBody'>
        <li>
          <HHLinkButton href='https://github.com/haostonh/apartments-web-scraper' text='GitHub'/>
          
        </li>
        <li>Scraping Apartment Info from Apartments.com</li>
        <li>Take user input in which city and state they are searching for apartments</li>
        <li>Scrap name, address, phone number, pricing, beds, and website of apartments</li>
        <li>Insert the apartments' info into a CSV file</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Javascript</li>
            <li>Axios</li>
            <li>Cheerio</li>
          </ul>
      </ul>
    </div>
  )
}

export default ApartmentsWebScraper;