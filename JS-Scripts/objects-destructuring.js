const band = {
    bandName: "BAND",
    songName: "Song",
    year: 1993,
    artist: "Artist"
};

const { bandName, songName } = band;

console.log(bandName, songName);

// to assign objects values to another variable names

const { bandName:var1, songName:var2} = band;

console.log(var1);
console.log(var2);


// assign rest values to a variable as object

const { bandName:var3, songName:var4, ...restProps} = band;

console.log(var3);
console.log(var4);
console.log(restProps);