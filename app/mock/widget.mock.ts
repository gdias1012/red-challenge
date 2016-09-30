import { Widget } from "../model/widget";

export const WIDGETS: Array<Widget> = [
{ id: 1, name: "Jon Snow Update0", color: "black", price: 3.02, inventory: 15, melts: true },
{ id: 2, name: "Was", color: "green", price: 0.02, inventory: 199, melts: true },
{ id: 3, name: "Just", color: "red", price: 1.00, inventory: 2, melts: true },
{ id: 4, name: "Here isidro", color: "red", price: 0.00, inventory: 0, melts: true },
{ id: 5, name: "!!", color: "black", price: 2.00, inventory: 100, melts: false }]; /*,
{ id: 6, name: "!!", color: "black", price: 500.50, inventory: 199, melts: true },
{ id: 7, name: "Treetop", color: "green", price: 18.15, inventory: 24, melts: false },
{ id: 8, name: "Node Two!", color: "green", price: 52.01, inventory: 19, melts: true },
{ id: 9, name: "Kaloobon", color: "white", price: 9.99, inventory: 12, melts: false },
{ id: 10, name: "Bioyino", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 11, name: "Dome!", color: "magenta", price: 67.23, inventory: 976, melts: false },
{ id: 12, name: "Widgetize Them", color: "turtle-shell", price: 99.99, inventory: 500, melts: false },
{ id: 13, name: "Wild Crazy", color: "depends on the viewing angle", price: 750.00, inventory: 10, melts: false },
{ id: 14, name: "Test 6232015852", color: "purple", price: 5.00, inventory: 4, melts: true },
{ id: 15, name: "Test 6232015", color: "green", price: 3.00, inventory: 454, melts: true },
{ id: 16, name: "forge", color: "white", price: 1.00, inventory: 67, melts: true },
{ id: 17, name: "Jon", color: "black", price: 20.00, inventory: 3, melts: true },
{ id: 18, name: "Test 6252015", color: "black", price: 5.00, inventory: 3, melts: true },
{ id: 19, name: "sdfsafd", color: "magenta", price: 8.99, inventory: 90, melts: true },
{ id: 20, name: "thing", color: "red", price: 9.99, inventory: 8, melts: true },
{ id: 21, name: "thing", color: "green", price: 9.99, inventory: 4, melts: true },
{ id: 22, name: "Nodile", color: "black", price: 52.01, inventory: 19, melts: true },
{ id: 23, name: "Twenty Three 333", color: "green", price: 19.99, inventory: 333, melts: true },
{ id: 24, name: "dohickey", color: "magenta", price: 3.75, inventory: 598, melts: true },
{ id: 25, name: "thingAMaBob", color: "black", price: 19.99, inventory: 8, melts: true },
{ id: 26, name: "Noj", color: "black", price: 30.00, inventory: 5, melts: true },
{ id: 27, name: "try outs", color: "red", price: 5.75, inventory: 123, melts: true },
{ id: 28, name: "Test8888", color: "black", price: 8.88, inventory: 88, melts: true },
{ id: 29, name: "New One", color: "red", price: 9.00, inventory: 57, melts: false },
{ id: 30, name: "New One", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 31, name: "New One", color: "purple", price: 9.00, inventory: 52, melts: false },
{ id: 32, name: "1234", color: "red", price: 123.00, inventory: 1, melts: true },
{ id: 33, name: "one two three", color: "red", price: 1234.00, inventory: 1, melts: true },
{ id: 34, name: "asdf", color: "red", price: 1234.00, inventory: 1, melts: true },
{ id: 35, name: "asd", color: "red", price: 123.00, inventory: 1, melts: true },
{ id: 36, name: "asdf", color: "red", price: 123.00, inventory: 1, melts: true },
{ id: 37, name: "Another Test", color: "depends on the viewing angle", price: 9001.00, inventory: 9001, melts: false },
{ id: 38, name: "asdf", color: "red", price: 1234.00, inventory: 1, melts: true },
{ id: 39, name: "asdf", color: "red", price: 1234.00, inventory: 1, melts: true },
{ id: 40, name: "asdf", color: "red", price: 1234.00, inventory: 1, melts: true },
{ id: 41, name: "FirstNotes", color: "red", price: 9.00, inventory: 10, melts: true },
{ id: 42, name: "Dog", color: "10", price: 1.00, inventory: 10, melts: true },
{ id: 43, name: "cat", color: "purple", price: 20.00, inventory: 20, melts: true },
{ id: 44, name: "frog", color: "purple", price: 20.00, inventory: 20, melts: true },
{ id: 45, name: "dogs", color: "black", price: 30.00, inventory: 40, melts: true },
{ id: 46, name: "dogs", color: "black", price: 40.00, inventory: 4, melts: true },
{ id: 47, name: "cats", color: "black", price: 20.00, inventory: 5, melts: true },
{ id: 48, name: "ventures", color: "red", price: 30.00, inventory: 40, melts: true },
{ id: 49, name: "jon", color: "black", price: 50.00, inventory: 60, melts: true },
{ id: 50, name: "foo-bar", color: "red", price: 1.00, inventory: 2, melts: true },
{ id: 51, name: "asdf", color: "green", price: 2.00, inventory: 3, melts: true },
{ id: 52, name: "Twenty Three 52", color: "purple", price: 99.99, inventory: 201, melts: true },
{ id: 53, name: "foo bar", color: "black", price: 3.00, inventory: 1, melts: true },
{ id: 54, name: "foo-bar", color: "purple", price: 20.00, inventory: 3, melts: true },
{ id: 55, name: "my test widget", color: "purple", price: 77.00, inventory: 77, melts: true },
{ id: 56, name: "don's widget", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 57, name: "Test", color: "magenta", price: 12.00, inventory: 100, melts: true },
{ id: 58, name: "NewTest", color: "black", price: 40.00, inventory: 320, melts: true },
{ id: 59, name: "TestXX", color: "purple", price: 22.00, inventory: 123, melts: true },
{ id: 60, name: "FooBarrr", color: "red", price: 43.00, inventory: 333, melts: true },
{ id: 61, name: "Onemore", color: "red", price: 111.00, inventory: 444, melts: true },
{ id: 62, name: "Blablabla", color: "green", price: 112.00, inventory: 400, melts: true },
{ id: 63, name: "TEEST", color: "red", price: 33.00, inventory: 1111, melts: true },
{ id: 64, name: "TesteAAA", color: "purple", price: 33.00, inventory: 334, melts: true },
{ id: 65, name: "TTese", color: "red", price: 11.00, inventory: 400, melts: true },
{ id: 66, name: "TESXXXXXX", color: "black", price: 300.00, inventory: 400, melts: true },
{ id: 67, name: "AnotherTest", color: "white", price: 240.00, inventory: 140, melts: true },
{ id: 68, name: "ABCD_XXX", color: "black", price: 350.00, inventory: 310, melts: true },
{ id: 69, name: "NewTeste_XXX", color: "black", price: 330.00, inventory: 120, melts: false },
{ id: 70, name: "FinalTest", color: "black", price: 153.00, inventory: 320, melts: true },
{ id: 71, name: "OneMore", color: "magenta", price: 429.99, inventory: 300, melts: true },
{ id: 72, name: "TestLoadingA", color: "purple", price: 1.00, inventory: 1245, melts: true },
{ id: 73, name: "32", color: "green", price: 32.00, inventory: 33, melts: true },
{ id: 74, name: "45", color: "black", price: 44.00, inventory: 44, melts: false },
{ id: 75, name: "TestC", color: "purple", price: 13.00, inventory: 300, melts: false },
{ id: 76, name: "229999999999", color: "purple", price: 21.00, inventory: 21, melts: true },
{ id: 77, name: "221", color: "purple", price: 21.00, inventory: 2, melts: true },
{ id: 78, name: "22", color: "black", price: 22.00, inventory: 22, melts: true },
{ id: 79, name: "44", color: "magenta", price: 33.00, inventory: 33, melts: true },
{ id: 80, name: "kylebob", color: "black", price: 2.00, inventory: 3, melts: true },
{ id: 81, name: "Widget Forest", color: "darkgreen", price: 55.75, inventory: 192, melts: true },
{ id: 82, name: "Postman Post", color: "lightgreen", price: 1000.00, inventory: 500, melts: true },
{ id: 83, name: "Postman Post 2", color: "green", price: 500.00, inventory: 1000, melts: true },
{ id: 84, name: "Whats up with melt", color: "green", price: 500.00, inventory: 1000, melts: true },
{ id: 85, name: "RV Widget Spa", color: "lightred", price: 23938.00, inventory: 233, melts: true },
{ id: 86, name: "UI Widget", color: "magenta", price: 90.00, inventory: 542, melts: true },
{ id: 87, name: "Post Response", color: "teal", price: 1.00, inventory: 100, melts: true },
{ id: 88, name: "Response", color: "brown", price: 2.00, inventory: 222, melts: true },
{ id: 89, name: "More widgets", color: "future", price: 25.00, inventory: 1250, melts: true },
{ id: 90, name: "Master Widget", color: "lightgreen", price: 293.00, inventory: 238239, melts: true },
{ id: 91, name: "Paint Widget", color: "all-colors", price: 238.00, inventory: 29248, melts: true },
{ id: 92, name: "Widget House", color: "lightgray", price: 75.00, inventory: 840, melts: true },
{ id: 93, name: "Again", color: "lightpurple", price: 83.00, inventory: 900, melts: true },
{ id: 94, name: "Make Another", color: "green", price: 88.00, inventory: 2, melts: true },
{ id: 95, name: "Work", color: "black", price: 99.00, inventory: 23, melts: true },
{ id: 96, name: "Work 2", color: "beige", price: 88.00, inventory: 89, melts: true },
{ id: 97, name: "Door Stopper", color: "white", price: 88.00, inventory: 35, melts: true },
{ id: 98, name: "Rugster", color: "gray", price: 83.00, inventory: 90, melts: true },
{ id: 99, name: "Charlotte", color: "tealgreen", price: 900.00, inventory: 50, melts: true },
{ id: 100, name: "testSNS", color: "blue", price: 500.00, inventory: 10, melts: true },
{ id: 101, name: "Platinum ", color: "latinum", price: 20000.00, inventory: 2, melts: true },
{ id: 102, name: "Titanium", color: "titanium", price: 4500.00, inventory: 10000, melts: true },
{ id: 103, name: "Silver", color: "silver", price: 500.00, inventory: 9000, melts: true },
{ id: 104, name: "Aluminum", color: "aluminum", price: 6.00, inventory: 1000424593, melts: true },
{ id: 105, name: "test13", color: "purple", price: 5.00, inventory: 25, melts: true },
{ id: 106, name: "Test Widget", color: "teal", price: 0.15, inventory: 10, melts: true },
{ id: 107, name: "Lake Wild", color: "teal", price: 0.10, inventory: 50, melts: true },
{ id: 108, name: "Another Test", color: "future", price: 21.00, inventory: 222, melts: true },
{ id: 109, name: "Another Test", color: "lightblue", price: 0.40, inventory: 2, melts: true },
{ id: 110, name: "TESTINGAABBCC", color: "purple", price: 123.00, inventory: 4, melts: true },
{ id: 111, name: "Talymo", color: "depends on the viewing angle", price: 1000000.00, inventory: 1, melts: true },
{ id: 112, name: "Audrey", color: "purple", price: 50.00, inventory: 1, melts: true },
{ id: 113, name: "Poot", color: "purple", price: 100.00, inventory: 1, melts: true },
{ id: 114, name: "Bolthouse lol", color: "black", price: 4.00, inventory: 2, melts: true },
{ id: 115, name: "I need to eat", color: "red", price: 5.00, inventory: 2, melts: true },
{ id: 116, name: "Going to eat", color: "green", price: 10.00, inventory: -1, melts: true },
{ id: 117, name: "first troll", color: "magenta", price: 45.86, inventory: 56, melts: true },
{ id: 118, name: "second troll", color: "white", price: 45.00, inventory: 47, melts: true },
{ id: 119, name: "wat", color: "purple", price: 34.45, inventory: 37, melts: true },
{ id: 120, name: "wat2", color: "white", price: 34.00, inventory: 56, melts: true },
{ id: 121, name: "test2", color: "white", price: 34.00, inventory: 34, melts: true },
{ id: 122, name: "dirtrally", color: "purple", price: 1800.50, inventory: 25, melts: true },
{ id: 123, name: "test45", color: "magenta", price: 56.00, inventory: 6, melts: true },
{ id: 124, name: "test46", color: "red", price: 56.00, inventory: 9, melts: true },
{ id: 125, name: "troll46", color: "depends on the viewing angle", price: 7.00, inventory: 79, melts: true },
{ id: 126, name: "tyh", color: "black", price: 56.00, inventory: 6, melts: true },
{ id: 127, name: "last2", color: "magenta", price: 34.00, inventory: 789, melts: true },
{ id: 128, name: "Pamela Test", color: "black", price: 10.00, inventory: 3, melts: true },
{ id: 129, name: "Philly test", color: "green", price: 78.00, inventory: 5, melts: true },
{ id: 130, name: "Elise", color: "magenta", price: 5.00, inventory: 7, melts: false },
{ id: 131, name: "Danny test", color: "black", price: 8.00, inventory: 1, melts: true },
{ id: 132, name: "Mariah", color: "green", price: 2.00, inventory: 2, melts: true },
{ id: 133, name: "Chris T", color: "black", price: 2.00, inventory: 4, melts: true },
{ id: 134, name: "Deb", color: "magenta", price: 672.00, inventory: 3892, melts: false },
{ id: 135, name: "Test !!", color: "magenta", price: 34.00, inventory: 3, melts: false },
{ id: 136, name: "Pamela Whise", color: "black", price: 1000000.00, inventory: 1, melts: false },
{ id: 137, name: "deb test", color: "black", price: 322.00, inventory: 3, melts: true },
{ id: 138, name: "Chris Whise", color: "magenta", price: 359.00, inventory: 2, melts: false },
{ id: 139, name: "Henry", color: "purple", price: 34.00, inventory: 1, melts: true },
{ id: 140, name: "Milly", color: "black", price: 34.00, inventory: 1, melts: false },
{ id: 141, name: "Chad", color: "magenta", price: 34.00, inventory: 3, melts: true },
{ id: 142, name: "Specner", color: "green", price: 34.00, inventory: 3, melts: true },
{ id: 143, name: "Roget", color: "white", price: 89.00, inventory: 2, melts: true },
{ id: 144, name: "Dash", color: "black", price: 34.00, inventory: 1, melts: true },
{ id: 145, name: "Cobb Webb", color: "magenta", price: 24.00, inventory: 1, melts: true },
{ id: 146, name: "Julie", color: "magenta", price: 234.00, inventory: 2, melts: true },
{ id: 147, name: "Kimberly", color: "white", price: 45.00, inventory: 2, melts: true },
{ id: 148, name: "test widget 4", color: "black", price: 343.00, inventory: 1, melts: false },
{ id: 149, name: "Brent", color: "green", price: 9.00, inventory: 99, melts: true },
{ id: 150, name: "Braden", color: "white", price: 8.00, inventory: 111, melts: false },
{ id: 151, name: "H3", color: "depends on the viewing angle", price: 123.00, inventory: 123, melts: true },
{ id: 152, name: "Brody", color: "black", price: 123.00, inventory: 123, melts: true },
{ id: 153, name: "123", color: "red", price: 123.00, inventory: 123, melts: true },
{ id: 154, name: "latest", color: "magenta", price: 22.00, inventory: 222, melts: true },
{ id: 155, name: "155", color: "black", price: 12.00, inventory: 123, melts: true },
{ id: 156, name: "fix", color: "purple", price: 123.00, inventory: 123, melts: true },
{ id: 157, name: "111", color: "red", price: 111.00, inventory: 111, melts: true },
{ id: 158, name: "222", color: "purple", price: 222.00, inventory: 222, melts: true },
{ id: 159, name: "abcdef", color: "green", price: 333.00, inventory: 333, melts: true },
{ id: 160, name: "aaa", color: "red", price: 111.00, inventory: 111, melts: true },
{ id: 161, name: "fix", color: "purple", price: 123.00, inventory: 123, melts: true },
{ id: 162, name: "fix", color: "purple", price: 123.00, inventory: 123, melts: true },
{ id: 163, name: "fix", color: "purple", price: 123.00, inventory: 123, melts: true },
{ id: 164, name: "abc", color: "red", price: 123.00, inventory: 123, melts: true },
{ id: 165, name: "abcdefg", color: "red", price: 123.00, inventory: 123, melts: true },
{ id: 166, name: "abc", color: "red", price: 3.00, inventory: 123, melts: true },
{ id: 167, name: "Twenty Three 2", color: "black", price: 9.99, inventory: 987, melts: true },
{ id: 168, name: "Twenty Three 2", color: "black", price: 9.99, inventory: 777, melts: true },
{ id: 169, name: "Twenty Three 3", color: "green", price: 9.00, inventory: 3, melts: true },
{ id: 170, name: "Twenty Three 4", color: "white", price: 9.00, inventory: 7877, melts: true },
{ id: 171, name: "Twenty Three 172", color: "black", price: 9.00, inventory: 55, melts: false },
{ id: 172, name: "Twenty Three 2", color: "magenta", price: 9.00, inventory: 33, melts: true },
{ id: 173, name: "Twenty Three 2", color: "magenta", price: 9.00, inventory: 33, melts: true },
{ id: 174, name: "Twenty Three 2", color: "magenta", price: 9.00, inventory: 33, melts: true },
{ id: 175, name: "Twenty Three 175", color: "magenta", price: 9.00, inventory: 33, melts: true },
{ id: 176, name: "Twenty Three 2", color: "magenta", price: 9.00, inventory: 33, melts: true },
{ id: 177, name: "one more try", color: "white", price: 3.53, inventory: 3, melts: true },
{ id: 178, name: "thingamabob", color: "purple", price: 34.00, inventory: 19, melts: true },
{ id: 179, name: "thingamabob", color: "purple", price: 34.00, inventory: 19, melts: true },
{ id: 180, name: "thingamabob", color: "purple", price: 34.00, inventory: 19, melts: true },
{ id: 181, name: "thingamabob", color: "purple", price: 34.00, inventory: 19, melts: true },
{ id: 182, name: "Kathleen Madigan", color: "black", price: 99.00, inventory: 777, melts: true },
{ id: 183, name: "Jim Gaffigan", color: "black", price: 1000.00, inventory: 1001, melts: true },
{ id: 184, name: "Peter", color: "depends on the viewing angle", price: 777.00, inventory: 1, melts: true },
{ id: 185, name: "Erin Foley", color: "depends on the viewing angle", price: 100.00, inventory: 200, melts: true },
{ id: 186, name: "Jeannie Gaffigan", color: "depends on the viewing angle", price: 998.00, inventory: 999, melts: true },
{ id: 187, name: "Camille Alvin", color: "purple", price: 100000.00, inventory: 1, melts: true },
{ id: 188, name: "yyy", color: "purple", price: 1.00, inventory: 1, melts: true },
{ id: 189, name: "zzz2", color: "red", price: 1.00, inventory: 2, melts: true },
{ id: 190, name: "iii", color: "red", price: 7.77, inventory: 2, melts: false },
{ id: 191, name: "zzz2", color: "red", price: 1.00, inventory: 2, melts: true },
{ id: 192, name: "888-2", color: "red", price: 888.00, inventory: 888, melts: true },
{ id: 193, name: "Jackie Kashian", color: "purple", price: 33.00, inventory: 33, melts: true },
{ id: 194, name: "Erin Foley", color: "magenta", price: 7.00, inventory: 7, melts: true },
{ id: 195, name: "Ophira Eisenberg", color: "red", price: 50.00, inventory: 50, melts: true },
{ id: 196, name: "Maria Bamford", color: "green", price: 60.00, inventory: 60, melts: true },
{ id: 197, name: "Bob Hope", color: "purple", price: 70.00, inventory: 70, melts: true },
{ id: 198, name: "Bing Crosby", color: "black", price: 80.00, inventory: 80, melts: true },
{ id: 199, name: "Steve Byrne", color: "red", price: 201.00, inventory: 201, melts: true },
{ id: 200, name: "Ken Jeong", color: "black", price: 800.00, inventory: 808, melts: true },
{ id: 201, name: "Rex Navarette", color: "black", price: 900.00, inventory: 909, melts: true },
{ id: 202, name: "Prashanth Venkataramanujam", color: "black", price: 990.09, inventory: 991, melts: true },
{ id: 203, name: "Hasan Minjah", color: "black", price: 1100.00, inventory: 1101, melts: true },
{ id: 204, name: "test", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 205, name: "test", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 206, name: "test", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 207, name: "test", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 208, name: "test", color: "red", price: 1.00, inventory: 1, melts: true },
{ id: 209, name: "test", color: "green", price: 1.00, inventory: 1, melts: true },
{ id: 210, name: "test", color: "magenta", price: 1.00, inventory: 1, melts: true },
{ id: 211, name: "test", color: "magenta", price: 1.00, inventory: 1, melts: true },
{ id: 212, name: "test", color: "magenta", price: 1.00, inventory: 1, melts: true },
{ id: 213, name: "the real test", color: "green", price: 100.00, inventory: 20, melts: true },
{ id: 214, name: "the last test", color: "depends on the viewing angle", price: 20.00, inventory: 30, melts: true },
{ id: 215, name: "New One", color: "red", price: 1.23, inventory: 345, melts: true },
{ id: 216, name: "test", color: "purple", price: 1.00, inventory: 3, melts: true },
{ id: 217, name: "Why Elaine..What are you doing here?", color: "depends on the viewing angle", price: 10.07, inventory: 4, melts: true },
{ id: 218, name: "Test Widget 2", color: "depends on the viewing angle", price: 6.69, inventory: 5000, melts: true },
{ id: 219, name: "Top Secret", color: "rainbow", price: NaN, inventory: 9001, melts: true },
{ id: 220, name: "Top Secret", color: "rainbow", price: NaN, inventory: 9001, melts: true },
{ id: 221, name: "Top Secret", color: "rainbow", price: NaN, inventory: 9001, melts: true },
{ id: 222, name: "Top Secret", color: "rainbow", price: 9001.00, inventory: 1000000, melts: true },
{ id: 223, name: "Top Secret", color: "rainbow", price: 9001.00, inventory: 1000000, melts: true },
{ id: 224, name: "Top Secret", color: "rainbow", price: 1000000.00, inventory: 9001, melts: true },
{ id: 225, name: "Top Secret", color: "rainbow", price: 1000000.00, inventory: 9001, melts: true },
{ id: 226, name: "Bacon", color: "#B65548", price: 1.00, inventory: 2, melts: true },
{ id: 227, name: "Number", color: "blue, most of the time", price: NaN, inventory: -1, melts: true },
{ id: 228, name: "Test1", color: "red", price: 10.00, inventory: 2, melts: true },
{ id: 229, name: "Test3", color: "aquamarine", price: 9.95, inventory: 995, melts: true },
{ id: 230, name: "Test4", color: "ruby", price: 17.00, inventory: 0, melts: true },
{ id: 231, name: "Test11", color: "turquoise", price: 19.95, inventory: 50, melts: true },
{ id: 232, name: "Test12", color: "violet", price: 11.00, inventory: 12, melts: true },
{ id: 233, name: "Vegetable", color: "green", price: 2.50, inventory: 4, melts: true },
{ id: 234, name: "Fruit", color: "red", price: 3.20, inventory: 9, melts: true },
{ id: 235, name: "Tests", color: "blue", price: 4.00, inventory: 22, melts: true },
{ id: 236, name: "Taco", color: "yellow", price: 12.51, inventory: 2, melts: true },
{ id: 237, name: "Venture Cube", color: "red", price: 17.50, inventory: 1, melts: true },
{ id: 238, name: "Test Widget 238", color: "magenta", price: 100.00, inventory: 534, melts: true },
{ id: 239, name: "New Widget 9000", color: "black", price: 100.00, inventory: 234, melts: true },
{ id: 240, name: "Victory Widget", color: "black", price: 15.80, inventory: 12, melts: true },
{ id: 241, name: "asdf", color: "red", price: 12.51, inventory: 2, melts: false },
{ id: 242, name: "Bioyino", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 243, name: "test", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 244, name: "test", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 245, name: "test", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 246, name: "test", color: "turtle-shell", price: 90.41, inventory: 5, melts: true },
{ id: 247, name: "asdf", color: "red", price: 12.00, inventory: 2, melts: true },
{ id: 248, name: "test", color: "blue", price: 9.95, inventory: 0, melts: true },
{ id: 249, name: "asdf", color: "red", price: 12.51, inventory: 2, melts: true },
{ id: 250, name: "asdf", color: "red", price: 12.52, inventory: 2, melts: true }];*/