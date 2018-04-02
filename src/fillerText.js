const realEstateSection = {
  halfWidth: {
    body: 'Despite the slump after the 2008 housing crash, prices in London have rebounded to their highest levels ever.',
    header: 'House Hunting in... London',
    image: 'image-real-estate',
    title: 'International Real Estate',
  },
  listView: {
    title: 'Find Properties',
    rows: ['Go to Real Estate Section', 'Search for Properties', 'Download the Real Estate App', 'Commercial Real Estate', 'Video Showcase: Real Estate', 'Post an Ad']
  },
  fullWidth: {
    image: 'ad-large-real-estate',
    logo: 'ad-small-real-estate',
    rows: ['NoMads newest condos', '2 BRs starting $2.050 M', '3 BRs starting $2.9 M']
  }
}

const autosSection = {
  halfWidth: {
    body: 'This one weird trick will have every salesperson kicking themself... after you\'ve driven off the lot!',
    header: 'Buying a Car? Beat the Dealer',
    image: 'image-autos',
    title: 'Automobile Industry',
  },
  listView: {
    title: 'Find Autos',
    rows: ['View Used Autos', 'Dealer Locations', 'Ask a Dealer', 'Blue Book Value', 'Exclusive Report: Tesla to Open Dealership', 'Post an Ad']
  },
  fullWidth: {
    image: 'ad-large-autos',
    logo: 'ad-small-autos',
    rows: ['Toyota\'s Model 3 Competitor', 'Hybrids as low as $17,000', 'The all-new Avalon']
  }
}

const jobsSection = {
  halfWidth: {
    body: 'Best ways to make sure your resume doesn\'t end up in the trash can. No $20 bill required. Results guaranteed!',
    header: 'Wow Your Recruiter Today!',
    image: 'image-jobs',
    title: 'Job Hunting',
  },
  listView: {
    title: 'Find Jobs',
    rows: ['View Newest Listings', 'Ask a Hiring Manager', 'How to Negotiate Salary', 'Download the Job Seeker\'s Guide', 'Submit Your Resume']
  },
  fullWidth: {
    image: 'ad-large-jobs',
    logo: 'ad-small-jobs',
    rows: ['Zillow is Hiring!', 'Software Engineer in SF', 'Business Analyst in Seattle']
  }
}


const tabContent = [realEstateSection, autosSection, jobsSection]
const tabNames = ['Real Estate', 'Autos', 'Jobs', 'All Classifieds'];

function _getRandomNumber (range) {
  // Returns a number between 0 and the range
  return Math.floor(Math.random() * range);
}

function randomlyGenerateAllContent () {
  let allClassifiedsSection = {};

  allClassifiedsSection.halfWidth = tabContent[_getRandomNumber(3)].halfWidth;
  allClassifiedsSection.listView = tabContent[_getRandomNumber(3)].listView;
  allClassifiedsSection.fullWidth = tabContent[_getRandomNumber(3)].fullWidth;

  return allClassifiedsSection;
}

export default {
  randomlyGenerateAllContent,
  tabContent,
  tabNames
}