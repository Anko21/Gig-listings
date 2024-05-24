import { screen, render, waitFor, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Gig from "../src/components/GIg";

describe("should render the complete Gig component correctly", () => {
  it("Should render a h3 with the correct name", () => {
    render(<Gig 
      id={1}
      artist = {"Billie Eilish"}
      img ={ "billie.png"}
      description= {"With the Barbie hype over"}
      time= {"Mon 18:00"}
      date= {"07 July 2025"}
      location= {"Glasgow OVO Hydro"}
      eventName= {"BILLIE EILISH - HIT ME HARD AND SOFT= THE TOUR"}
      isFavourite = {false} 
      />);
    expect(screen.getByText("Billie Eilish"));
    expect(screen.getByRole("img")).toHaveAttribute("src", "src/assets/billie.png");
    expect(screen.getByText("With the Barbie hype over"));  
    expect(screen.getByText("Time: Mon 18:00"));  
    expect(screen.getByText("Date: 07 July 2025"));  
    expect(screen.getByText("Glasgow OVO Hydro"));  

  });
});

