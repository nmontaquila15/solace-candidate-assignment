## Logic Behind Changes Made
I mainly focused my changes on bug fixes and visual improvements since that is what was called out in the assignment wrather than adding new features. I think it would be a bigger impact for the user to focus on adding more features but ultimately both would need to be done before I'd consider this to be at an "MVP" level.
## Next Steps
My main focus with more time would be to add filtering and sorting features. Here's a breakdown of the rough UI I'm picturing for each field:
- First and last name could remain as just a search field (or possibly even taken out as I'm not sure how many users would be searching for a specific name? depends on the use case).
- City and Specialties I think would work well with searchable multi-select menus. So basically a list of checkboxes with each city/specialty, and search field at the top since I imagine the list could get quite long and users probably have an idea of what they're looking for anyway
- Degree could just be a multi-select without a search as there aren't that many unique options anyway.
- Years of experience could probably be a range slider where you can drag both ends to set min and max number of years. It could potentially also just be a number input where you set the minimum number of years (is there such a thing as too much experience??) but I think the range slider is more flexible
- For sorting, my initial thought would be to include ascending and descending sorting every field except for specialties and phone number. The priority would be years of experience and the name fields, as degree and city will also have the filter.

To do all of this I'd probably adopt some component library as a dependency, either MUI or Mantine for a full-fledged library, or maybe something like shadcn for something more lightweight. Honestly I probably would've used a component library for the work in this PR but I wasn't sure if that was the spirit of the assignment. Generally I prefer to use some sort of component library rather than "reinvent the wheel" of build my own components for such common UIs like the ones that would be used in the filters I described above.

Thank you for taking the time to read through everything!!
