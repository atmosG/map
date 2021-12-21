var lines=[];

function addboundaries () {
        const map = new google.maps.Map(document.getElementById("volcano-map"), {
            zoom: 3,
            center: { lat: 0, lng: -180 },
            mapTypeId: "terrain",
        });
        //Anchorage
        var points = [
            new google.maps.LatLng(90,150),
            new google.maps.LatLng(60,150),
            new google.maps.LatLng(60,180),
            new google.maps.LatLng(54.5,170),
            new google.maps.LatLng(50,159),
            new google.maps.LatLng(46,163),
            new google.maps.LatLng(50.3,-177.5),
            new google.maps.LatLng(50.2,-176.5),
            new google.maps.LatLng(51.5,-170),
            new google.maps.LatLng(53.5,-160),
            new google.maps.LatLng(56,-153),
            new google.maps.LatLng(57,-151),
            new google.maps.LatLng(53,-135),
            new google.maps.LatLng(54,-137),
            new google.maps.LatLng(55,-130),
            new google.maps.LatLng(56,-130),
            new google.maps.LatLng(57,-132),
            new google.maps.LatLng(59.8,-135.4),
            new google.maps.LatLng(59.6,-136.4),
            new google.maps.LatLng(59.15,-136.56),
            new google.maps.LatLng(58.9,-137.44),
            new google.maps.LatLng(59.2,-137.54),
            new google.maps.LatLng(59.9,-138.64),
            new google.maps.LatLng(60,-139.2),
            new google.maps.LatLng(60.34,-139),
            new google.maps.LatLng(60.2,-141),
            new google.maps.LatLng(60.3,-141),
            new google.maps.LatLng(90,-141),
            new google.maps.LatLng(90,150)
        ];
        lines[1]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[1].setMap(map);

	//Tokyo
        var points = [
            new google.maps.LatLng(60,180),
            new google.maps.LatLng(60,90),
            new google.maps.LatLng(20,90),
            new google.maps.LatLng(20,100),
            new google.maps.LatLng(10,100),
            new google.maps.LatLng(10,130),
            new google.maps.LatLng(20,130),
            new google.maps.LatLng(20,155),
            new google.maps.LatLng(25,155),
            new google.maps.LatLng(25,165),
            new google.maps.LatLng(43,165),
            new google.maps.LatLng(46,163),
            new google.maps.LatLng(50,159),
            new google.maps.LatLng(54.5,170),
            new google.maps.LatLng(60,180)
	];
        lines[2]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[2].setMap(map);

        //Wellington
        var points = [
            new google.maps.LatLng(-90,160),
            new google.maps.LatLng(0,160),
            new google.maps.LatLng(0,-140),
            new google.maps.LatLng(-10,-140),
            new google.maps.LatLng(-10,-90),
            new google.maps.LatLng(-90,-90),
            new google.maps.LatLng(-90,160)
        ];
        lines[3]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[3].setMap(map);

        //Buenos Aires
        var points = [
            new google.maps.LatLng(-10,-90),
            new google.maps.LatLng(-90,-90),
            new google.maps.LatLng(-90,-10),
            new google.maps.LatLng(-7,-10),
            new google.maps.LatLng(-7,-20),
            new google.maps.LatLng(-10,-30),
            new google.maps.LatLng(-10,-90)
        ];
        lines[4]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[4].setMap(map);


       //Washington
        var points = [
            new google.maps.LatLng(-0.203,-139.989),
            new google.maps.LatLng(-10.005,-139.999),
            new google.maps.LatLng(-10.001,-29.995),
            new google.maps.LatLng(-7,-20),
            new google.maps.LatLng(3.992,-30),
            new google.maps.LatLng(6.992,-35),
            new google.maps.LatLng(12.5,-37.5),
            new google.maps.LatLng(16.964,-37.484),
            new google.maps.LatLng(22.203,-40.002),
            new google.maps.LatLng(29.964,-39.984),
            new google.maps.LatLng(45.003,-40.001),
            new google.maps.LatLng(44.946,-58.120),
            new google.maps.LatLng(43.985,-60.075),
            new google.maps.LatLng(42.970,-64.826),
            new google.maps.LatLng(42.970,-67.038),
            new google.maps.LatLng(44.782,-66.954),
            new google.maps.LatLng(45.112,-67.144),
            new google.maps.LatLng(45.152,-67.274),
            new google.maps.LatLng(45.102,-67.364),
            new google.maps.LatLng(45.252,-67.474),
            new google.maps.LatLng(45.352,-67.414),
            new google.maps.LatLng(45.552,-67.424),
            new google.maps.LatLng(45.612,-67.764),
            new google.maps.LatLng(47.022,-67.764),
            new google.maps.LatLng(47.342,-68.324),
            new google.maps.LatLng(47.142,-68.894),
            new google.maps.LatLng(47.242,-69.054),
            new google.maps.LatLng(47.362,-69.054),
            new google.maps.LatLng(47.442,-69.214),
            new google.maps.LatLng(46.612,-69.994),
            new google.maps.LatLng(46.392,-70.034),
            new google.maps.LatLng(46.292,-70.274),
            new google.maps.LatLng(45.832,-70.314),
            new google.maps.LatLng(45.312,-70.864),
            new google.maps.LatLng(45.272,-71.324),
            new google.maps.LatLng(44.972,-71.494),
            new google.maps.LatLng(44.972,-74.864),
            new google.maps.LatLng(44.682,-75.534),
            new google.maps.LatLng(43.622,-76.794),
            new google.maps.LatLng(43.562,-78.794),
            new google.maps.LatLng(43.562,-79.174),
            new google.maps.LatLng(42.752,-78.874),
            new google.maps.LatLng(41.622,-82.494),
            new google.maps.LatLng(41.852,-83.134),
            new google.maps.LatLng(42.292,-83.074),
            new google.maps.LatLng(42.352,-82.954),
            new google.maps.LatLng(42.492,-82.594),
            new google.maps.LatLng(43.922,-82.014),
            new google.maps.LatLng(45.532,-82.774),
            new google.maps.LatLng(45.872,-83.904),
            new google.maps.LatLng(46.452,-84.164),
            new google.maps.LatLng(46.472,-84.624),
            new google.maps.LatLng(46.962,-84.944),
            new google.maps.LatLng(48.292,-88.464),
            new google.maps.LatLng(47.962,-89.554),
            new google.maps.LatLng(48.202,-90.964),
            new google.maps.LatLng(48.022,-91.564),
            new google.maps.LatLng(48.632,-93.374),
            new google.maps.LatLng(48.812,-94.704),
            new google.maps.LatLng(48.972,-94.994),
            new google.maps.LatLng(48.972,-114.994),
            new google.maps.LatLng(48.972,-123.154),
            new google.maps.LatLng(48.252,-123.304),
            new google.maps.LatLng(48.502,-125.034),
            new google.maps.LatLng(48.302,-127.994),
            new google.maps.LatLng(50.958,-133.992),
            new google.maps.LatLng(52.604,-134.985),
            new google.maps.LatLng(52.781,-135.439),
            new google.maps.LatLng(53.889,-139.950),
            new google.maps.LatLng(56.672,-151.494),
            new google.maps.LatLng(55.972,-152.994),
            new google.maps.LatLng(53.472,-159.994),
            new google.maps.LatLng(51.497,-167.991),
            new google.maps.LatLng(49.901,-178.507),
            new google.maps.LatLng(49.552,179.802),
            new google.maps.LatLng(49.388,179.145),
            new google.maps.LatLng(48.731,176.077),
            new google.maps.LatLng(46,163),
            new google.maps.LatLng(43,165),
            new google.maps.LatLng(25.001,164.999),
            new google.maps.LatLng(25,155),
            new google.maps.LatLng(20,154.999),
            new google.maps.LatLng(20,130),
            new google.maps.LatLng(9.999,129.999),
            new google.maps.LatLng(10.002,159.999),
            new google.maps.LatLng(0.001,160.002),
            new google.maps.LatLng(-0.032,173.064),
            new google.maps.LatLng(0,-140),
            new google.maps.LatLng(-0.203,-139.989)
        ];
        lines[5]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[5].setMap(map);

        //Toulouse
        var points = [
                new google.maps.LatLng(45,-11.593),
                new google.maps.LatLng(45,-8),
                new google.maps.LatLng(49.5,-8),
                new google.maps.LatLng(50,-2),
                new google.maps.LatLng(50,0),
                new google.maps.LatLng(51.2,2),
                new google.maps.LatLng(51.6,2),
                new google.maps.LatLng(51.6,2.2),
                new google.maps.LatLng(52,2.2),
                new google.maps.LatLng(55,5),
                new google.maps.LatLng(57,5),
                new google.maps.LatLng(60,0),
                new google.maps.LatLng(63,0),
                new google.maps.LatLng(63,4),
                new google.maps.LatLng(65.7,7),
                new google.maps.LatLng(70,15),
                new google.maps.LatLng(71.33,25),
                new google.maps.LatLng(71.33,28),
                new google.maps.LatLng(71,30),
                new google.maps.LatLng(71,40),
                new google.maps.LatLng(71,60),
                new google.maps.LatLng(71,90),
                new google.maps.LatLng(20,90),
                new google.maps.LatLng(20,80),
                new google.maps.LatLng(10,80),
                new google.maps.LatLng(7.5,77),
                new google.maps.LatLng(-2.5,77),
                new google.maps.LatLng(-6,75),
                new google.maps.LatLng(-60,75),
		new google.maps.LatLng(-60,-10),
		new google.maps.LatLng(-7,-10),
		new google.maps.LatLng(-7,-20),
		new google.maps.LatLng(3.992,-30),
		new google.maps.LatLng(6.999,-35),
		new google.maps.LatLng(12.5,-37.5),
		new google.maps.LatLng(16.964,-37.484),
		new google.maps.LatLng(22.203,-40.002),
		new google.maps.LatLng(29.964,-39.984),
		new google.maps.LatLng(45.003,-40.001),
		new google.maps.LatLng(45.003,-15.001),
		new google.maps.LatLng(45,-11.593)
        ];
        lines[6]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[6].setMap(map);

        //London
        var points = [
                new google.maps.LatLng(45,-11.593),
                new google.maps.LatLng(45,-8),
                new google.maps.LatLng(49.5,-8),
                new google.maps.LatLng(50,-2),
                new google.maps.LatLng(50,0),
                new google.maps.LatLng(51.2,2),
                new google.maps.LatLng(51.6,2),
                new google.maps.LatLng(51.6,2.2),
                new google.maps.LatLng(52,2.2),
                new google.maps.LatLng(55,5),
                new google.maps.LatLng(57,5),
                new google.maps.LatLng(60,0),
                new google.maps.LatLng(63,0),
                new google.maps.LatLng(63,4),
                new google.maps.LatLng(65.7,7),
                new google.maps.LatLng(70,15),
                new google.maps.LatLng(71.33,25),
                new google.maps.LatLng(71.33,28),
                new google.maps.LatLng(71,30),
                new google.maps.LatLng(71,40),
                new google.maps.LatLng(71,60),
                new google.maps.LatLng(80,60),
                new google.maps.LatLng(90,60),
                new google.maps.LatLng(90,30),
                new google.maps.LatLng(82,30),
                new google.maps.LatLng(82,0),
                new google.maps.LatLng(73,0),
                new google.maps.LatLng(73,-20),
                new google.maps.LatLng(70,-20),
                new google.maps.LatLng(66.406,-29.938),
                new google.maps.LatLng(45,-30),
                new google.maps.LatLng(45,-11.593)
        ];
        lines[7]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[7].setMap(map);

       //Darwin
        var points = [
            new google.maps.LatLng(-90,75),
            new google.maps.LatLng(-60,75),
            new google.maps.LatLng(-6,75),
            new google.maps.LatLng(-2.5,77),
            new google.maps.LatLng(7.5,77),
            new google.maps.LatLng(10,80),
            new google.maps.LatLng(20,80),
            new google.maps.LatLng(20,90),
            new google.maps.LatLng(20,100),
            new google.maps.LatLng(10,100),
            new google.maps.LatLng(10,160),
            new google.maps.LatLng(0,160),
            new google.maps.LatLng(-90,160),
            new google.maps.LatLng(-90,75)
        ];
        lines[8]=new google.maps.Polyline({
                path: points,
                strokeColor: "#0000FF",
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        lines[8].setMap(map);
}
console.log(addboundaries())
google.maps.event.addDomListener(window,'load',addboundaries);