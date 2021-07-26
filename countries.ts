const countries: Record<string, number> = {
    // Africa
    'gh': 18, // Ghana
    'za': 18, // South Africa
    'tn': 18, // Tunisia

    // APAC (Asia, Australasia, Oceania, Russia)
    'cn': 14, // China
    'hk': 18, // Hong Kong
    'in': 18, // India
    'id': 18, // Indonesia
    'kr': 14, // Korea, South
    'ph': 18, // Philippines
    'ru': 18, // Russia
    'sg': 13, // Singapore
    'vn': 15, // Vietnam

    // Caribbean
    'aw': 16, // Aruba
    'cw': 16, // Curaçao
    'sx': 16, // Sint Maarten

    // Europe
    'at': 14, // Austria
    'be': 13, // Belgium
    'bg': 16, // Bulgaria
    'hr': 16, // Croatia
    'cy': 14, // Cyprus
    'cz': 15, // Czech Republic
    'de': 16, // Deutschland / Germany
    'dk': 13, // Denmark
    'ee': 13, // Estonia
    'fi': 13, // Finland
    'fr': 15, // France
    'gr': 15, // Greece
    'hu': 16, // Hungary
    'ie': 16, // Ireland
    'it': 14, // Italy
    'lv': 13, // Latvia
    'li': 14, // Lithuania
    'lu': 16, // Luxembourg
    'mt': 13, // Malta
    'nl': 16, // Netherlands
    'no': 13, // Norway
    'po': 16, // Poland
    'pt': 13, // Portugal
    'ro': 16, // Romania
    'sm': 16, // San Marino
    'rs': 15, // Serbia
    'sk': 16, // Slovakia
    'si': 16, // Slovenia
    'es': 14, // Spain
    'se': 13, // Sweden
    'ch': 13, // Switzerland
    'gb': 13, // United Kingdom

    // North America
    'ca': 13, // Canada
    'us': 13, // United States

    // South America
    'br': 16, // Brazil
    'cl': 14, // Chile
    'co': 14, // Columbia
    'pe': 14, // Peru
    've': 14, // Venezuela

    'default': 13,
};

export default countries;