import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( // here
    <div className="App"> 

      <header className="App-header"> 
        
        <header className = "Phone-screen">

          <header className = "App-arrow-left">
            <p>
              →
            </p>
          </header>

          <header className = "App-arrow-right">
            <p>
              ←
            </p>
          </header>


          <header className = "App-language-select-left">

          <p>
            &nbsp;Language select▼
          </p>


          </header>

          <header className = "App-language-select-right">

            <p>
              &nbsp;Language select▼

            </p>

          
          </header>

          <header className = "Start-button">
            <p>
              Start
            </p>
          </header>

          <header className = "App-title">
            <div className = "App-settings-top">
            ⎯

              
        
            </div>

            <div className = "App-settings-middle">

            ⎯
              
        
            </div>
            <div className = "App-settings-bottom">

            ⎯
              
        
            </div>
            
            

          </header>

          <header className="App-text-for-title">
            <p>
            </p>
                Gibberish App 
            </header>


          <header className = "Transmission-box">
            <p> 
              Transmission: 
            </p>
  
            <header className = "Playback-button-Translation">
              <p>
                Playback

              </p>
            </header>

          </header>

          <header className = "Transcription-box">
            <p>
            Transcription: 
            </p>
            <header className = "Playback-button-Transcription">
              <p>
                Playback

              </p>
            </header>

          </header>

        </header>

      </header> 

    </div> // here 
  );
}

export default App;

