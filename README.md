
# Welcome!
The Microlab is a modular system of components, equipment, software, and training aimed at facilitating 
rapid prototyping. This draws extensively upon other open source resources (e.g. Adafruit, OpenPnP, etc.)

The contents of this system can be accessed interactively via Github Pages.  You can access the interface from 
the following URL:

https://lciscon.github.io/IPL-Microlab/

## General instructions

To contribute to the Microlab project you should follow the standard process 
for adding to Github projects.  Here is a primer:

https://docs.github.com/en/get-started/quickstart/contributing-to-projects


## Component library instructions

Each component has a code associated with it (e.g. E115) that consists of a letter followed by a 
number. The letters break the library down by (E)lectrical, (N)uts & Bolts, and (H)ardware.

###  Adding Components


Each component has a corresponding markdown file within the Components subdirectory. There is 
a template for that file located in the Components/template subdirectory.

1. Make a copy of the component template file.
2. Name the file to match the component ID (e.g. E245.md)
3. Move it into the corresponding folder (e.g. Components/E- Electrical)
4. Fill out the contents of the file.
5. Create a label for the box using the Microsoft Word label template in the Components/template directory. 
6. Print the label and put it on the box.

*Editing the Markup file*
You edit the template file using a text editor.  Do not change the headings or overall format.
All you need to do is fill out the values in the table rows.  The table rows look like this (without quotes):

"| Supplier: | XXX |"

Replace the "XXX" value with the correct value for the new parts.

This file is formatted using the Markdown syntax.  You can find information about it here:

https://www.markdownguide.org/cheat-sheet/

https://www.markdownguide.org/getting-started/

<br>

*Creating the QR Code*

Also you will have to create a QR Code for the label.  The QR Code should point directly to the URL of the file you
just created, but with the "html" extension rather than "md".  Something like this:

"https://lciscon.github.io/IPL-Microlab/Components/E%20-%20Electrical/E110.html"

**DO NOT USE INTERMEDIATE SERVICES OR LINK SERVERS!!!**

<br>

*Assigning a color*

Also each part sub-category has a color associated with it.  For example E100 (Single Board Computers) are yellow. The background color of the label should be set to this color. Here are the current assignments:

  E100  Yellow
  











