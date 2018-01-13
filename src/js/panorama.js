pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "title":"panoramaTEST",
    "autoLoad": true,
    "compass": true,
    "preview": "css/pol.jpg",
    "hotSpots": [
        {
            "pitch": -12,
            "yaw": 170,
            "type": "info",
            "text": "Jakiś tam piach."
        },
        {
            "pitch": -10,
            "yaw": -50,
            "type": "info",
            "text": "Jakieś tam info o czymś. W tym przypadku to link do mojego GitHuba :D",
            "URL": "https://github.com/Kamyil"
        },
        {
            "pitch": 0,
            "yaw": -60,
            "type": "scene",
            "text": "Jakieś tam odległe miejsce do przeniesienia się. Po kliknięciu w nie powinno się otworzyc kolejne zdjęcie panoramiczne, ale z racji budzetu pokroju serialu Korony Krolów, otworzy ci po prostu te samo zdjecie co to teraz",
            "sceneId": "pond"
        }
    ]
 
});