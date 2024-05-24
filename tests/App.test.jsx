import { screen, render, waitFor, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import App from "../src/App"
    
    describe('App', ()=>{ 
        
    test('when the heart-shaped button is clicked, changes background color', async () => {
        
        render (<App/>)

        await waitFor(() => expect(screen.getByTestId(1)).toHaveStyle({ backgroundColor: 'rgbrgb(221, 216, 221)' })) 

        userEvent.click(screen.getByTestId(1))

        await waitFor(() => expect(screen.getByTestId(1)).toHaveStyle({ backgroundColor: 'rgb(241, 84, 220)' })) 
    });

    test("when 'Your Favorites' button is clicked, changes text to 'Show all'm, and back", async () => {

        render (<App/>)

        await waitFor(() => expect(screen.getByRole('showFav')).toHaveTextContent("Your Favourites")) 

        userEvent.click(screen.getByRole('showFav'))

        await waitFor(() => expect(screen.getByRole('showFav')).toHaveTextContent('Show All')) 
    })

    test('When loading the page, all gigs are listed', async ()=>{

        render (<App/>)

        await waitFor(() => expect(screen.getByText('The Crooked Spires')))
        await waitFor(() => expect(screen.getByText('The Falling Stars')))
        await waitFor(() => expect(screen.getByText('The Revolving Doors')))
        await waitFor(() => expect(screen.getByText('The Shifting Sands')))
        await waitFor(() => expect(screen.getByText('The Untamed Beasts')))
        await waitFor(() => expect(screen.getByText('The Burning Flames')))
        await waitFor(() => expect(screen.getByText('The Echoing Voices')))
        await waitFor(() => expect(screen.getByText('The Wandering Troubadours')))
        await waitFor(() => expect(screen.getByText('The Rising Storm')))
        await waitFor(() => expect(screen.getByText('The Eternal Flame')))
    })

    test("When 'My Favourites' button is clicked, only your favourites are listed", async ()=>{

        render (<App/>)

        await waitFor(() => expect(screen.getByTestId(1)).toHaveStyle({ backgroundColor: 'rgbrgb(221, 216, 221)' })) 

        userEvent.click(screen.getByTestId(1))
        userEvent.click(screen.getByTestId(3))
        userEvent.click(screen.getByTestId(7))

        userEvent.click(screen.getByRole("showFav"))

        await waitFor(() => expect(screen.getByText('The Crooked Spires')))
        await waitFor(() => expect(screen.getByText('The Revolving Doors')))
        await waitFor(() => expect(screen.getByText('The Echoing Voices')))    
        await waitFor(() => expect(screen.queryByText('The Eternal Flame')).not.toBeInTheDocument())

        await waitFor(() => expect(screen.queryByText('The Falling Stars')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Shifting Sands')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Untamed Beasts')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Burning Flames')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Wandering Troubadours')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Rising Storm')).toBeNull())
        await waitFor(() => expect(screen.queryByText('The Eternal Flame')).toBeNull())
    })

    test("When a gig's heart shaped button is clicked, this gig goes first in the list", async ()=>{

        render (<App/>)

        await waitFor(() => expect(screen.getByTestId(1)).toHaveStyle({ backgroundColor: 'rgbrgb(221, 216, 221)' })) 

        userEvent.click(screen.getByTestId(7))

        await waitFor(() => expect(screen.getAllByRole("article")[0]).toHaveTextContent('The Echoing Voices'))

        userEvent.click(screen.getByTestId(10))

        await waitFor(() => expect(screen.getAllByRole("article")[1]).toHaveTextContent('The Eternal Flame'))
    })
});

