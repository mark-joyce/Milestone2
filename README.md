# 'The Nomad 9' Interactive World Map Site

Milestone Two Project: Interactive Frontend Development - Code Institute

This is an Interactive site that calls on the Google Maps API to show the best Digital Nomad destinations around the world with information & links to go with it.
The site has a map that marks the best destinations around the world, best for aspiring or veteran Digital Nomads to work & live from.
When a marker location is clicked - all helpful information, details & useful links show up in a popup above the marker.

![alt text](https://github.com/mark-joyce/Milestone2/blob/master/assets/images/4-device-image.png "Multi-Device Site Image")

## Live Website
The live website for the agency can be found [here](https://mark-joyce.github.io/Milestone2).

## UX Design

### User stories

**User Story 1:** As a site visitor I would like to find out more about what a Digital Nomad is and does.

**User Story 2:** As a site visitor I would like to be able to see the best Digital Nomad destinations.

**User Story 3:** As a site visitor I would like to read through the information of each markered location and to see which destination suits me best.

**User Story 4:** As a site visitor I would like to find remote work to be able to work in the place that suits me best and the possibility to book flights and book accommodation in that location.

**User Story 5:** As the site owner I want to provide the best information to the aspiring or veteran Digital Nomad, through an interactive map with multiple markers, and to monetise the site through affiliate links to help visitors find remote work, book flights and book accommodation.

### Target Audience

This site aims to attract people that are looking into becoming a Digital Nomad, or are already a Digital Nomad and is looking for their next destination. It informs site visitors about what a Digital Nomad is, the best locations for them and helpful 'What You Need To Know' information about the location when one of the numbered markers is clicked. The site also provides them with links to external websites so they can find remote jobs, book flights and book accommodation on AirBnb and Skyscanner in the exact location.

The main objective of the site is to provide a visitor with a helpful tool that will enable them to see the best 9 Digital Nomad locations worldwide with information and links to go with each one.

### Strategy
- My aim is to give helpful information on locations for digital nomads and monetise through affiliate links.
- The site is for new or old digital nomads to find their next place to live and work from.

### Scope
For visitors, I want them to be able to use the global interactive map, click on the numbered marker locations, see the information and links for each location, read the headings and content of the side panel to find out more about digital nomads and the sponsors. 

### Structure
The information is structured within one page that is not scrollable on page load and is logically grouped. The sidebar on the left includes a logo, 3 headings and content under each one  - Welcoming visitors, describing what is a digital nomad, and the 'sponsors' of the site. The interactive map on the right takes up much of the site and has 9 different markers showing the 9 best locations, with each marker 'clickable' to see more information and links.

### Skeleton
- Site was implemented with help from drawing wireframes on paper and doing a coloured digital mockup.
- Users will navigate through the site using the interactive map, clicking the markers, and clicking the tabs of the left sidebar.

### Surface
The colour scheme used is simple with most colour coming from the map. The left sidebar has a white background, with Montserrat text - also the text used for the marker headings and information of the InfoWindow popup on the map. I want the site to be clean, seamless and very simple for the visitor to use with no over-the-top features that would ruin user experience - the site visitor knows exactly how to use the site as soon as it loads.

### Mockups & Wireframes

The following [mockup](https://github.com/mark-joyce/Milestone2/blob/master/mockups/original-mockup.jpg) and [wireframes](https://github.com/mark-joyce/Milestone2/tree/master/wireframes) were created at the start to help design the site for desktop, tablet and mobile displays.

## Technologies

### Languages Used

- **HTML** - The project used HTML to define the structure, the layout and some content of the site.

- **CSS** - The project used CSS to style the site's elements and for media queries on mobile.

- **JavaScript** - The project used Javascript to implement the Google Maps API and customise it.

### Libraries

- [jQuery](https://code.jquery.com/) - Used to simplify DOM manipulation.

- [Google Fonts](https://fonts.google.com/) -  Google Fonts library was used for the Montserrat font of the site.

### Frameworks

- [Bootstrap](https://getbootstrap.com/) - The project used Bootstrap to create the layout of the site with the sidebar on the left and map on the right.

### Other

- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) - Used to implement the map and its features on the site.

## Features

### Existing Features
The project consists of the following features:

- **Labelled Markers** - Top digital nomad destinations shown on the interactive map using numbered markers (1-9).
- **Interactive Map** - Altered to not have the default Google Maps UI with no street view option or satellite/terrain option, with GestureHandling set to 'Greedy' for full control for the user - this is to keep the site as simple as possible with no unnecessary features.
- **InfoWindow Popup** - Each marker is clickable with an InfoWindow of the Google Maps API used.
- **Location Information** - Inside the InfoWindow popup above the marker, it shows information about the location including the specific place and country, a 'what you need to know' section with 5 different headings to give helpful information, and 3 buttons linking to external 'affiliated' sites.
- **Green Buttons** - The buttons include - a 'find remote work' one that links to WeWorkRemotely which is a remote work job search platform, a 'book your flight' one that links to SkyScanner which finds the cheapest flights to the location, and a 'book your accommodation' one that links to AirBnB which lists properties to stay in at the markered location.
- **Sidebar** - The left sidebar has 3 headings with content under each one, and the site's 'The Nomad 9' logo at the top of the sidebar.
- **Sidebar Content** - The content includes - a 'Welcome!' heading welcoming site visitors and tells you how to use the site, a 'Go Nomadic...' heading that describes what a digital nomad is, and an 'Our Sponsors' heading that shows the site's 'affiliated' sponsors with a disclaimer that we will get a 'commission' if visitors book through our links.
- **Mobile Header** - On mobile (under 767px) the sidebar does not show and instead there is a white header with the site's logo and it welcomes and tells the site visitor how to use the site.

### Features Left to Implement
List of features to be implemented in the future:

- Current weather in the markered location showing up in the information of the popup when the marker is clicked - possibly done with a weather API.
- All possible digital nomad destinations are added and an option to filter through the locations based on values the visitor used when filtering.
- Current local time in the markered locations area also showing up in the information of the popup when the marker is clicked - possibly done with a clock/time API.

## Testing

### Code validation

#### HTML

The HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/).

There was no problems with the HTML - 'Document checking completed. No errors or warnings to show.'


#### CSS

The CSS code was validated using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

While validating the CSS code the following error appeared: 

```
Value Error : font-weight 600px is not a font-weight value : 600px
```

This was a mistake by me, accidentally putting a pixel size on a font-weight value where it should be 600, not 600px - this was fixed upon seeing this error.

#### JavaScript

The JavaScript code was validated using [JSHint](https://jshint.com/).

While validating the JavaScript code the following warning appeared: 

```
Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeOtherInfo, InforObj)
```

The warning is referencing this line - `marker.addListener('click', function() {` - upon investigating it more and following the code of this [tutorial](http://www.freakyjolly.com/embed-google-maps-with-multiple-markers-and-infowindows-info-popups-open-on-click-or-mouse-hover/) I decided to leave it the way it is after testing it numerous of times over different browsers and devices, there was never a problem with the 'warning'.

### Features Testing

During this test, it was a relatively easy process with no notable bugs to mention with the 'existing features' discussed above. One tiny unresolved bug includes the links of the green buttons of the InfoWindow Popups on the map, opening up in a new tab but reloading over each other.

All links to external sites will open in a new tab using 'target="_blank"' for the best user experience. The buttons with links inside them have been manually tested to ensure that they are pointing to the correct destination.


### Responsive Testing

This site was tested across multiple browsers (Google Chrome, Safari, Firefox) and on multiple mobile devices (iPad Mini, OnePlus One) to ensure compatibility and responsiveness.

The Google Chrome developer tools were used to additionally inspect responsiveness for the following devices in both portrait and landscape mode:

- iPad Pro / iPad

- iPhone 5/SE 

- iPhone 6/7/8 

- iPhone 6/7/8 Plus 

- iPhone X 

- Galaxy S5

- Android Pixel 2/XL

The website is fully responsive and working well on mobile devices, with media queries used to make the site look well with a mobile-only header on mobile devices under 767px.

### User Stories Testing

**User Story 1:**

- Solution: The left sidebar shows users information about what a Digital Nomad is and does. 

**User Story 2:** 

- Solution: The interactive map shows users the best Digital Nomad destinations with 9 seperate markers worldwide.

**User Story 3:** 

- Solution: The markers on the map show information in a popup when the marker is clicked, with the placename & country and a 'what you need to know' section with helpful information.

**User Story 4:** 

- Solution: The 3 Green Buttons in the popup on the markers of the map link to helpful sites so users can find remote work, book flights or find accommodation in that top location.


## Deployment
The site was developed using GitPod. To keep records of different versions of all project files git version control system was used. 

In order to track the changes in the local repository the following steps were taken:

- command `git add 'filename'` - to update what will be committed.

- command `git commit` - to commit the changes.

Using `git push` command all changes from the local repository were pushed to the remote one on GitHub.


This project is hosted using GitHub pages, deployed directly from the `master` branch. 

To deploy my project from GitHub I followed these steps.

1. On GitHub website I logged onto my account and navigated to [my repository](https://github.com/mark-joyce/Milestone2).

2. Under my repository name, I clicked on **Settings** tab.

3. I scrolled down to the **GitHub Pages** section.

4. On the **Select source** drop-down menu I selected `master` as my GitHub Pages publishing source.

5. I clicked **Save**.

The deployed site will update automatically upon new commits to the `master` branch. It is important to remember that for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

In order to clone my GitHub repository to your local one you should follow these steps.

1. On GitHub navigate to [my repository](https://github.com/mark-joyce/Milestone2).

2. Under the repository name, click **Clone or download**.

3. In the Clone with HTTPs section, copy the clone URL for the repository.

4. Go to IDE that you are using and open terminal.

5. Change the current working directory to the location where you want the cloned directory to be made;=.

6. Type `git clone` and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/mark-joyce/Milestone2
```

7. Lastly press **Enter** and your local repository will be created.

## Credits

### Content
Content of the site is largely based on the [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) and their documentation & tutorials, also this [article](https://ie.oberlo.com/blog/cheapest-places-to-live-in-the-world) was used to help fill up the information of the markered locations.

### Media
[Canva](https://www.canva.com/) was used to create 'The Nomad 9' logo for the site.

[Favicon.io](https://favicon.io/emoji-favicons/) was used to create the favicon for the site.

### Acknowledgements
The site's layout used this simple bootstrap [template](https://startbootstrap.com/templates/simple-sidebar/) as a base to build off from.

Bootstrap's [documentation](https://getbootstrap.com/docs/4.4/components/card/) was used to help create the content of the sidebar.

This [tutorial](http://www.freakyjolly.com/embed-google-maps-with-multiple-markers-and-infowindows-info-popups-open-on-click-or-mouse-hover/) was used to help create the multiple InfoWindows for the markers, and to link the placeName and contentMarker to the markersOnMap in the JavaScript file.

This [solution](https://stackoverflow.com/questions/11903720/stop-google-maps-api-from-scrolling-to-a-grey-area) helped restrict the scrolling area of the map to stop the map from moving further away from the middle.

This Google Maps [document](https://developers.google.com/maps/documentation/javascript/interaction) helped set the loading zoom level of the map and giving site visitors full control of the map.

This [document](https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/control-disableUI) was used to disable the default Google Maps UI.

This [document](https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/marker-labels) was used to help number the markers 1-9 using labels.

This [article](https://blog.hubspot.com/marketing/site-content-only-mobile-viewers-can-see-ht) was used to help restrict site content with the header for mobile only.
