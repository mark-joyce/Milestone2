# 'The Nomad 9' Interactive World Map Site

Milestone Two Project: Interactive Frontend Development - Code Institute

This is an Interactive site that calls on the Google Maps API to show the best digital nomad destinations around the world with information & links to go with it.
The site has a map that marks the best destinations around the world, best for aspiring or veteran digital nomads to work & live from.
When a marker location is clicked - all helpful information, details & useful links show up in a popup above the marker.

## Live Website
The live website for the agency can be found [here](https://mark-joyce.github.io/Milestone2).

## UX

### User stories
- As the site visitor, I want to be able to see the best digital nomad destinations, with information of each place and to see which destination suits me best, also with links to find remote work and the possibility to book flights and accommodation. 
- As the site owner, I want to provide the best information to the aspiring or veteran digital nomad, through an interactive map with multiple markers, and to monetise the site through affiliate links to help visitors find remote work, book flights and accommodation.

### Strategy
- My aim is to give helpful information on locations for digital nomads and monetise through affiliate links.
- The site is for new or old digital nomads to find their next place to live and work from.

### Scope
For visitors, I want them to be able to use the global interactive map, click on the numbered marker locations, see the information and links for each location, click on the tabs of the side panel to find out more about digital nomads and the sponsors. 

### Structure
The information is structured within one page that is not scrollable on page load and is logically grouped. The sidebar on the left includes a logo, content and a navigation system with 3 tabs - Welcoming visitors, describing what is a digital nomad, and the 'sponsors' of the site. The interactive map on the right takes up much of the site and has 9 different markers showing the best locations, with each marker clickable to see more info and links.

### Skeleton
- Site was implemented with help from drawing wireframes on paper and doing a coloured digital mockup.
- Users will navigate through the site using the interactive map, clicking the markers, and clicking the tabs of the left sidebar.

### Surface
The colour scheme used is simple with most colour coming from the map. The left sidebar has a white background, with Montserrat text on it - also the text used for the marker headings and information of the map. I want the site to be clean, seamless and very simple for the visitor to use with no over-the-top features that would ruin user experience - the site visitor knows exactly how to use the site as soon as it loads.

## Technologies
1. HTML
2. CSS
3. Bootstrap
4. JQuery
5. Javascript

## Features
- Top digital nomad destinations shown on the interactive map using numbered markers (1-9).
- The interactive map was altered to not have the default Google Maps UI with no street view option or satellite/terrain option - this is to keep the site as simple as possible with no unnecessary features.
- Each marker is clickable with an InfoWindow of the Google Maps API used.
- Inside the InfoWindow popup above the marker, it shows information about the location including the specific place and country, a 'what you need to know' section with 5 different headings to give helpful information, and 3 buttons linking to external 'affiliated' sites.
- The buttons include - a 'find remote work' one that links to WeWorkRemotely which is a remote work job search platform, a 'book your flight' one that links to SkyScanner which finds the cheapest flights to the location, and a 'book your accommodation' one that links to AirBnB which lists properties to stay in at the markered location.
- The left sidebar has 3 tabs, content inside each one, and the site's 'The Nomad 9' logo at the bottom of the sidebar.
- The tabs include - a 'Welcome!' tab welcoming site visitors and shows how to use the site, a 'Nomadic?' tab that describes what a digital nomad is, and a 'Sponsors' tab that shows the site's affiliated sponsors with buttons to go to the external site.

### Potential Features Left to Implement
- Current weather in the markered location showing up in the information of the popup when the marker is clicked - possibly done with weather API.
- All possible digital nomad destinations are added and an option to filter through the locations based on values the visitor used when filtering.
- Current local time in the markered locations area also showing up in the information of the popup when the marker is clicked - possibly done with clock/time API.

## Testing

### Planning

### Implementation

### Results & Outcomes


## Deployment
The site was developed using GitPod. To keep records of different versions of all project files git version control system was used. 

In order to track the changes in the local repository the following steps were taken:

- command `git add 'filename'` - to update what will be committed;

- command `git commit` - to commit the changes.

Using `git push` command all changes from the local repository were pushed to the remote one on GitHub.


This project is hosted using GitHub pages, deployed directly from the `master` branch. 

To deploy my project from GitHub I followed these steps:

1. On GitHub website I logged onto my account and navigated to [my repository](https://github.com/mark-joyce/Milestone2);

2. Under my repository name, I clicked on **Settings** tab;

3. I scrolled down to the **GitHub Pages** section;

4. On the **Select source** drop-down menu I selected `master` as my GitHub Pages publishing source;

5. I clicked **Save**.

The deployed site will update automatically upon new commits to the `master` branch. It is important to remember that for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

In order to clone my GitHub repository to your local one you should follow these steps:

1. On GitHub navigate to [my repository](https://github.com/mark-joyce/Milestone2);

2. Under the repository name, click **Clone or download**;

3. In the Clone with HTTPs section, copy the clone URL for the repository;

4. Go to IDE that you are using and open terminal;

5. Change the current working directory to the location where you want the cloned directory to be made;

6. Type `git clone` and then paste the URL you copied in Step 3;

```
$ git clone https://github.com/mark-joyce/Milestone2
```

7. Lastly press **Enter** and your local repository will be created.

## Credits

### Content


### Media


### Acknowledgements
