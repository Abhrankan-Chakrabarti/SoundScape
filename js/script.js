document.getElementById('play').addEventListener('click', () => {
            document.getElementById('rain').play();
            document.getElementById('thunder').play();
            document.getElementById('birds').play();
            document.getElementById('waves').play();
        });

        document.getElementById('stop').addEventListener('click', () => {
            document.getElementById('rain').pause();
            document.getElementById('thunder').pause();
            document.getElementById('birds').pause();
            document.getElementById('waves').pause();
        });

        document.getElementById('rainSlider').addEventListener('input', (e) => {
            document.getElementById('rain').volume = e.target.value;
        });

        document.getElementById('thunderSlider').addEventListener('input', (e) => {
            document.getElementById('thunder').volume = e.target.value;
        });

        document.getElementById('birdsSlider').addEventListener('input', (e) => {
            document.getElementById('birds').volume = e.target.value;
        });

        document.getElementById('wavesSlider').addEventListener('input', (e) => {
            document.getElementById('waves').volume = e.target.value;
        });