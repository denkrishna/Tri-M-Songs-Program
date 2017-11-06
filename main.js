var myapp = angular.module('sortableApp', ['ui.sortable', 'ui.bootstrap']);
var list = [];
var SongListArray = [];
myapp.controller('sortableController', function ($scope) {
	"use strict";
	$scope.list = list;
	$scope.sortingLog = [];
});
myapp.controller('buttonController', function ($scope, songs) {
	"use strict";
	$scope.addSong = function () {
		var selectedSong = $scope.enteredSong, selectedSinger = $scope.enteredSinger;
		list.push({
			text: selectedSong,
			singer: selectedSinger
		});
	};
	$scope.removeSong = function () {
		list.splice(0, 1);
	};
	$scope.enteredSong = undefined;
	$scope.songs = songs;
});
// define factory for data source
myapp.factory("songs", function () {
	var songList = ["100 Years - Five for Fighting", "1973 - James Blunt", "9 Crimes - Damien Rice/Lisa Hannigan", "9 in the Afternoon - Panic! At the Disco", "A Whole New World - Aladdin/Jasmine", "Adventure of a Lifetime - Coldplay", "All Star - Smash Mouth", "All the Small Things - Blink-182", "Apologize - One Republic", "Are You Gonna Be My Girl - Jet", "Baby One More Time - Britney Spears", "Back to December - Taylor Swift", "Bad Blood - Taylor Swift/Kendrick Lamar", "Be Our Guest - Beauty and the Beast", "Beautiful Soul - Jesse McCartney", "Because of You - Kelly Clarkson", "Big Black Horse and a Cherry Tree - KT  Tunstall", "Billie Jean - Michael Jackson", "Blank Space - Taylor Swift", "Bohemian Rhapsody - Queen", "Breakeven - The Script", "Breathe Me - Sia", "Brick by Boring Brick - Paramore", "Bring Me to Life - Evanescence", "Broken - Seether/Amy Lee", "Bubbly - Colbie Caillat", "Bulletproof - La Roux", "Call Me Maybe - Carly Rae Jepsen", "Can't Feel My Face - the Weeknd", "Cecelia and the Satellite - Andrew McMahon", "Centuries - Fall Out Boy", "Chasing Cars - Snow Patrol", "Circle of Life - Elton John", "Clarity - Zedd/Foxes", "Classic - MKTO", "Clocks - Coldplay", "Colors of the Wind - Vanessa Williams", "Complicated - Avril Lavigne", "Crazy - Gnarls Barkley", "Do I Wanna Know - Arctic Monkeys", "Don't Stop Believin' - Journey", "Don't Stop Me Now - Queen", "Drag Me Down - One Direction", "Drive By - Train", "Drops of Jupiter - Train", "Emperor's New Clothes - Panic! at the Disco", "Ever the Same - Rob Thomas", "Everybody Talks - Neon Trees", "Ex's & Oh's - Elle King", "Face Down - The Red Jumpsuit Apparatus", "Fake Your Death - My Chemical Romance", "Fall for You - Secondhand Serenade", "Fences - Paramore", "Firework - Katy Perry", "For the First Time in Forever - Frozen", "Genghis Khan - Miike Snow", "Give Your Heart a Break - Demi Lovato", "Happy - Pharrell Williams", "Hello - Adele", "Hey, Soul Sister - Train", "Hey There Delilah - Plain White T's", "Holding Out for a Hero - Bonnie Tyler", "Honey I'm Good - Andy Grammer", "Hotel California - Eagles", "Hotline Bling - Drake", "I Don't Want to Miss a Thing - Aerosmith", "I Just Can't Wait to be King - The Lion King", "I Love Rock 'n' Roll - Joan Jett & The Blackhearts", "I Miss You - Blink 182", "I See the Light - Tangled", "If I Ain't Got You - Alicia Keys", "If I Could Turn Back Time - Cher", "If I Were a Boy - Beyoncé", "If You Could Only See - Tonic", "Ignorance - Paramore", "Immortals - Fall Out Boy", "In Too Deep - Sum 41", "Iris - Goo Goo Dolls", "It's All Coming Back to Me Now - Celine Dion", "I Want it That Way - Backstreet Boys", "I Won't Say (I'm in Love) - Hercules", "I'm Yours - Jason Mraz", "Jar of Hearts - Christina Perri", "Jumper - Third Eye Blind", "Just Give Me a Reason - P!nk/Nate Ruess ", "Land of Confusion - Genesis", "Let it Go - Frozen", "Let's Go to the Mall - Robin Sparkles", "Lights - Ellie Goulding", "Like I'm Gonna Lose You - Meghan Trainor/John Legend", "Lips of an Angel - Hinder", "Little Wonders - Rob Thomas", "Livin La Vida Loca - Ricky Martin", "Livin' on a Prayer - Bon Jovi", "Lonely No More - Rob Thomas", "Lost Boy - Ruth B", "Love Me Dead - Ludo", "Love You Like a Love Song - Selena Gomez", "Lullaby - Nickelback", "Migraine - Twenty One Pilots", "Movin' Out - Billy Joel", "Mr. Brightside - The Killers", "Name - Goo Goo Dolls", "Need You Now - Lady Antebellum ", "Never Gonna Give You up - Rick Astley", "New Perspective - Panic! at the Disco", "No Bravery - James Blunt", "One Call Away - Charlie Puth", "One Way or Another - Blondie", "One Week - Barenaked Ladies", "Only the Good Die Young - Billy Joel", "Paradise City - Guns and Roses", "Paradise - Coldplay", "Part of Your World - Little Mermaid", "Payphone - Maroon 5", "Photograph - Ed Sheeran", "Piano Man - Billy Joel", "Pieces - Sum 41", "Pompeii - Bastille", "Potential Breakup Song - Aly and AJ", "Radioactive - Imagine Dragons", "Renegades - X Ambassadors", "Roar - Katy Perry", "Royals - Lorde", "Safe & Sound - Taylor Swift", "Say Something - A Great Big World/Christina Aguilera", "Second Chance - Shinedown", "Secrets - One Republic", "She Will Be Loved - Maroon 5", "Shut up and Dance - Walk the Moon", "Sing - My Chemical Romance", "Sk8er Boi - Avril Lavigne", "Smooth Criminal - Michael Jackson", "Smooth - Santana", "Snuff - Slipknot", "Somebody Told Me - The Killers", "Somebody to You - The Vamps/Demi Lovato", "Someone Like You - Adele", "Space Oddity - David Bowie", "Starman - David Bowie", "Stay - Rihanna/Mikky Ekko", "Stereo Hearts - Gym Class Heroes", "Still Into You - Paramore", "Stitches - Shawn Mendes", "Stressed Out - Twenty One Pilots", "Sugar, We're Goin' Down - Fall Out Boy", "Summer Nights - Grease", "Sweet Child o' Mine - Guns N Roses", "Swing, Swing - The All-American Rejects", "Tale as Old as Time - Beauty and the Beast", "Teenage Dream - Katy Perry", "The A Team - Ed Sheeran", "The Ballad of Mona Lisa - Panic! At the Disco", "The Cup Song - Anna Kendrick", "The Dynamic Duet - Starkid", "The Kids Aren't Alright - Fall Out Boy", "The Logical Song - Supertramp", "The Only Exception - Paramore", "The Rock Show - Blink 182", "The Scientist - Coldplay", "Thinking Out Loud - Ed Sheeran", "This is Halloween - The Nightmare Before Christmas", "Time After Time - Cyndi Lauper", "Titanium - David Guetta/Sia", "Total Eclipse of the Heart - Bonnie Tyler", "Toxic - Britney Spears", "Uma Thurman - Fall Out Boy", "Unbreak My Heart - Toni Braxton", "Under the Bridge - Red Hot Chili Peppers", "Under the Sea - Little Mermaid", "Victorious - Panic! at the Disco", "Viva La Vida - Coldplay", "Waiting for Superman - Daughtry", "Wake Me up Before You Go-Go - Wham! ", "Want U Back - Cher Lloyd", "We are Never Ever Getting Back Together - Taylor Swift", "We Are the Champions - Queen", "We Didn't Start the Fire - Billy Joel", "Welcome to the Black Parade - My Chemical Romance", "What's My Age Again - Blink 182", "What's Up? - 4 Non Blondes", "When Will My Life Begin - Tangled", "When You Were Young - The Killers", "Wherever You Will Go - The Calling", "White Flag - Dido", "Who Says - Selena Gomez & the Scene", "Wonderwall - Oasis", "Wrecking Ball - Miley Cyrus", "You're Beautiful - James Blunt", "You and Me - Lifehouse", "You Belong With Me - Taylor Swift"];
	return songList;
});