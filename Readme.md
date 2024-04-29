# JAVASCRIPT

##  # History of Javascript
* Javascript was invented by Brendan Eih in 1995.
* It was developed by Netscape Navigator.
* It became ECMA-262 standard in 1997.
* Javascript is backward compatible but not forward compatible.
    * Backward Compatibility means ability of a language to work wih older version of itself or other components. Meaning that once something is accepted as vaid JS, then there will be no future changes to language. Code written in 1995 should work still today.
    * Forward Compatibility means ability of a language to work with newer version of itself or other components, meaning that including a new addition to language in a program would not cause that program to break if it were run in an old JS engine.

## # Ways of importing Javascript in HTML
* Use Script tag in Body of HTML (Recommended)
* Use Script tag in Head of HTML with `defer` attribute

* NOTE : It is recommended to put script tag at the bottom of the body tag so that it won't stop the browser to parse the html. When a browser gets to a script tag, it stops everything and first loads the file in script and then evaluates it. Thus putting script tag in head or start of body will make user to wait for longer period of time staring at blank screen. But now this is also solved where we can make the browser download JS asynchronously by using defer or async attributes in the script tag.

## # Comments in Javascript
* `//` -> This is used to mark a line as comment in Javascript.

## # Varaibles in Javascript
* Varaibles are used to store some information, we can use that information later, also we can change that information later.
* `use strict` -> This can be used to activate strict mode in JS File.

## # Rules for Naming a Variable in Javascript
* You cannot start a vaiable name with number, ex. 1value (invalid) but value1 (valid)
* You can use only _ (unerscore) or $ (Dollar) symbol
ex, fist_name (valid), $firstname (valid)
* You cannot use Spaces
ex, first name (invalid)
    * use snake_case_writing ex, first_name
    * use camelCaseWriting ex, firstName
* Convention : start with small letter and use camelCase.