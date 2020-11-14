const fs = require("fs");

/**
 * Function which prints all files and file in sub directory
 * @param string - path of directory to complete compand
 * @return N/a
 */
const list_contents_in_directory = path => {
  console.log(
    "\n********************* LIST CONTENTS IN DIRECTORY *********************\n"
  );

  // Initialising directory files and sub directories
  let dir_files = [];
  let sub_directories = [];

  //    Read directory with given path
  fs.readdir(path, (err, files) => {
    //   If error complete error return null command
    if (err) {
      console.log("\n** Failed to read directory **\n");
      return;
    }

    // Loop through available files
    files.forEach(file => {
      // get stat sync of current path
      let el = fs.statSync(`${path}/${file}`);
      //   If stat is directory push/append to dir_files list/array else push/append to sub_dir list/array
      el.isDirectory() ? sub_directories.push(file) : dir_files.push(file);
    });

    // If dir has any elements
    if (dir_files.length) printFiles(dir_files);

    // If sub_dir has any elements
    if (sub_directories.length) printSubDirectories(path, sub_directories);
  });
};

/**
 * Prints all files
 * @param array - files
 * @return n/a
 */
const printFiles = files => {
  console.log("\n** File(s) **\n");
  //   Loop through files and print each file
  files.forEach(element => {
    console.log(`F: ${element} \n`);
  });
};

/**
 *  Prints all sub directories
 * @param object - path and sub directory names
 */

const printSubDirectories = (path, directories) => {
  console.log("\n** Sub Directory **\n");
  //   Loop through sub directory and print
  directories.forEach(file => {
    console.log(`D: ${file} \n`);
    //  Read all files in sub directory
    fs.readdir(`${path}/${file}`, (err, files) => {
      //   Loop through sub directory files and directories and print
      files.forEach(f => {
        console.log(`\t F/D: ${f}`);
      });
    });
  });
};

module.exports = list_contents_in_directory;
