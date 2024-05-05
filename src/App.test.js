import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from './App';



describe("Emoji, search and title tests",() => {

  let header,emojiFilter,emojiList,copyEmoji;

  beforeEach(()=>{
    render(<App/>);
  })
  
  
  it('Header text ', () => { 
    header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
  })
  
  
  
 

    test('emoji list',()=> {
        // list içerisinde her item kontol edilir.
        emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 10);
        emojiList.map((item)=>{
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })

   
 

  test('emoji filter',()=>{
    emojiFilter = screen.getByLabelText('emojiInput');
      const emoji = 'Smiley';
      
      fireEvent.click(emojiFilter,emoji);
      expect(screen.getByText(emoji)).toBeInTheDocument();
  })




  test('Emoji copy',()=>{
    copyEmoji = screen.getByText('Grinning');
    
    fireEvent.click(copyEmoji);
    
    expect(copyEmoji.parentElement.getAttribute('data-clipboard-text')).toMatch('😀')
})


})