export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  address,
  phone,
  email,
  instagramUrl,
  facebookUrl,
  openingHours[] {
    days,
    hours
  }
}`;
