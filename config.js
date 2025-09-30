const config = {
  "property": {
    "streetAddress": "18 Smith Road",
    "city": "Oxford Station",
    "cityStateZip": "Oxford Station, ON K0G 1T0",
    "heroSubtitle": "Side Split Level | 3+1 Beds | 2 Baths | $799,900. Branded media link available. Please contact for property listing, floor plan, comparables, and virtual tour links.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/8b79e0ea16e838c1412b4fbeb32e15dc1fb7a4c68d07f686de92838c51bc1e66/Untitled_design__9_.png"
  },
  "realtor": {
    "fullName": "Driscoll-Peca Team",
    "title": "REALTOR®",
    "phone": null,
    "email": "ryan@driscollpeca.com",
    "bio": "",
    "photoUrl": null,
    "social": {
      "facebook": "https://www.facebook.com/driscollpecateam",
      "instagram": "https://instagram.com/ae.parks",
      "website": null
    }
  },
  "brokerage": {
    "name": "Real Broker LTD",
    "logoUrl": null,
    "address": "218 Brant Avenue\nBrantford ON N3T 3H9"
  },
  "openHouse": {
    "eventDate": "2025-10-05",
    "bundleItems": [
      {
        "icon": "fas fa-globe",
        "text": "Branded Media Link: https://sites.ground2airmedia.com/sites/18-smith-rd-oxford-station-on-k0g-1t0-19466671/branded"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Driscoll-Peca Team Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://driscollpeca.com/privacy.html"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-3",
    "repoUrl": "https://github.com/arslvn93/Open-House-3",
    "tag": "Open House 18 Smith Road",
    "netlifyUrl": null,
    "siteId": "3ae7651e-474c-47dc-baa1-05c080533c35"
  }
}