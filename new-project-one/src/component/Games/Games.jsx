

const Games = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Popular Games by Genre</h1>

      
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Action Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Call of Duty: Modern Warfare</li>
                <li>Assassins Creed Valhalla</li>
                <li>Doom Eternal</li>
                <li>Resident Evil Village</li>
                <li>Grand Theft Auto V</li>
            </ul>
        </div>

      
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Role-Playing Games (RPGs)</h2>
            <ul className="list-disc list-inside ml-4">
                <li>The Witcher 3: Wild Hunt</li>
                <li>Cyberpunk 2077</li>
                <li>Final Fantasy VII Remake</li>
                <li>The Elder Scrolls V: Skyrim</li>
                <li>Dark Souls III</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Strategy Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Civilization VI</li>
                <li>StarCraft II</li>
                <li>XCOM 2</li>
                <li>Total War: Three Kingdoms</li>
                <li>Crusader Kings III</li>
            </ul>
        </div>

 
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Sports Simulation Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>FIFA 21</li>
                <li>NBA 2K21</li>
                <li>Madden NFL 21</li>
                <li>MLB The Show 21</li>
                <li>F1 2021</li>
            </ul>
        </div>

        
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Adventure Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>The Legend of Zelda: Breath of the Wild</li>
                <li>Red Dead Redemption 2</li>
                <li>Uncharted 4: A Thiefs End</li>
                <li>The Last of Us Part II</li>
                <li>Tomb Raider (2013)</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Simulation Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>The Sims 4</li>
                <li>Microsoft Flight Simulator</li>
                <li>Cities: Skylines</li>
                <li>Euro Truck Simulator 2</li>
                <li>Planet Zoo</li>
            </ul>
        </div>

     
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Horror Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Resident Evil 7: Biohazard</li>
                <li>Outlast</li>
                <li>Amnesia: The Dark Descent</li>
                <li>Phasmophobia</li>
                <li>Alien: Isolation</li>
            </ul>
        </div>

        
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Puzzle Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Portal 2</li>
                <li>The Witness</li>
                <li>Baba Is You</li>
                <li>Monument Valley</li>
                <li>Tetris Effect</li>
            </ul>
        </div>

        
        <div>
            <h2 className="text-xl font-semibold mb-2">Platformer Games</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Hollow Knight</li>
                <li>Celeste</li>
                <li>Super Mario Odyssey</li>
            </ul>
        </div>
    </div>
    );
};

export default Games;