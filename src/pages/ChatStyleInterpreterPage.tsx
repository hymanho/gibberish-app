import {useState} from "react";

import {TranslationResult} from "../lib/type";

function ResultEntry({result}: {result: TranslationResult}){
    return (
        <div style={{
            border: "1px solid black",
            margin: "0.5vh"
        }}>
            <p>{result.sourceLanguage} -&gt; {result.targetLanguage}</p>
            <p>{result.targetText}</p>
        </div>
    );
}

export default function ChatStyleInterpreterPage(){
    const [results, setResults] = useState<TranslationResult[]>([]);
    function addResult(result: TranslationResult){
        setResults([...results, result]);
    }
    function clearResults(){
        setResults([]);
    }
    
    function addRandomResult(){
        const presetResults: TranslationResult[] = [
            {
                sourceLanguage: "decimal",
                targetLanguage: "hexadecimal",
                sourceText: "101",
                targetText: "65"
            },
            {
                sourceLanguage: "hexadecimal",
                targetLanguage: "decimal",
                sourceText: "0xACED",
                targetText: "44269"
            }
        ];
        
        addResult(presetResults[Math.floor(Math.random() * presetResults.length)]);
    }
    
    return (
        <div style={{
            margin: 0,
            padding: 0,
        }}>
            <section style={{
                marginTop: "0vh",
                height: "5vh",
            }}>
                <h1>Interpreter Page (Chat-Style)</h1>
            </section>
            
            <hr/>
            
            {/* TODO: auto scroll to the button when new entry added */}
            <section style={{
                height: "80vh",
                overflowY: "scroll",
            }}>
                {(results.length === 0) ? (
                    <p style={{textAlign: "center"}}>Press "Add Random Entry" to load some example</p>
                ) : (
                    results.map((result, index) => {
                            return <ResultEntry key={index} result={result}/>;
                    })
                )}
            </section>
            
            <hr/>
            
            <section style={{
                height: "5vh",
                marginBottom: 0,
                textAlign: "center",
            }}>
                <button onClick={addRandomResult}>Add Random Entry</button>
                <button onClick={clearResults}>Clear Results</button>
            </section>
        </div>
    );
}
