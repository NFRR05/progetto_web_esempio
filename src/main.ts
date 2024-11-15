
function Assistenza(): string | null
{
    let valore : string | null;
    valore = prompt();
    if(valore == null || valore == "")
    {
        alert("Hai inserito un valore non valido");
    }
    return valore;
}

//---------------------------------------------------------

function main(): void
{ 
    alert("Il tuo valore e': " + Assistenza());
    
}

//--------------------------------------------------------

main();
