# UIC SRSDS (ReuseConnect)
Simplify events, amplify sustainability

## Design (Figma)
https://www.figma.com/design/hDjxof8pngZeWlxt3rO2hv/SparkHack25

## Backend Service Repo
https://github.com/pratheek-dhananjaya/SparkHacks


## Inspiration
The idea for this project was sparked by diverse events hosted across university campuses. From club fairs to cultural festivals, countless events are organized by students each year, but we noticed a recurring challenge:  
- Event-related items, such as tables, decorations, and signage, are often purchased new and discarded after minimal use, leading to unnecessary waste.  
- Clubs and organizations face logistical hurdles when moving event supplies across large campuses, further increasing costs and inefficiencies.  

At the same time, we recognized an opportunity to involve students as active contributors to these events by enabling them to provide delivery services. By addressing these problems, we aimed to create a solution that:  
1. Encourages sustainability through the reuse of event materials.  
2. Empowers students with flexible job opportunities.  

This project combines our passion for sustainability, collaboration, and innovation to reduce waste, drive impact, and foster a self-sustaining event ecosystem on campus.

## What it does
Our project provides a platform that simplifies event planning while promoting sustainability and collaboration. Here's how it works:
1. **Reusable Inventory**:  
   - The platform hosts a centralized inventory of reusable event items, such as tables, chairs, decorations, and signage, which students and organizations can rent instead of purchasing new items.  
   - Clubs and organizations can book items based on availability, reducing waste and costs.  

2. **On-Campus Delivery Network**:  
   - Students with valid licenses can sign up as delivery drivers to transport event supplies across campus.  
   - This creates flexible job opportunities for students while ensuring logistical support for events.    

4. **Sustainability Tracking**:  
   - The platform includes a sustainability tracker that highlights metrics like waste reduction, items reused, and CO2 emissions saved.  
   - Users can view their individual contributions to sustainability efforts, encouraging eco-friendly practices.

## How we built it
We approached the development of this project systematically, combining research, design, and technology to create a scalable and user-friendly platform. Here’s how we built it:

1. **Research and Planning**  
   - Analyzed existing event management solutions and sustainability-focused platforms to identify gaps and opportunities.  
   - Studied best practices for creating reusable inventory systems and integrating small businesses.  

2. **Design and Wireframing**  
   - Designed wireframes to map out the user journey for event organizers, delivery drivers, and admins.  
   - Focused on building an intuitive interface to ensure ease of use for students with minimal training.  
   - Prioritized key workflows such as browsing inventory, booking items, and scheduling deliveries.  

3. **Technology Stack**  
   - **Frontend**:  
     - Built using Next.js for a web-platform experience
   - **Backend**:  
     - Developed using Spring for scalable API handling.  
     -  MySQL was used for managing the inventory database, booking schedules, and user data.  
   - **AI Integration**:  
     - Leveraged OpenAI's API to develop ...

4. **Implementation**  
   - Built core features, such as:  
     - Inventory management with real-time availability updates.  
     - Delivery scheduling and student driver onboarding system.  
     - Sustainability metrics tracking to display the platform’s environmental impact.    

## Challenges we ran into
1. **Inventory Management**  
   - Ensuring the platform could effectively track item conditions, availability, and usage presented technical and logistical challenges.  

2. **Establishing Trust in the Delivery Network**  
   - Onboarding and verifying student drivers with valid licenses required a robust system to maintain trust and reliability.  

3. **Real-Time Logistics and Scheduling**  
   - Managing real-time delivery requests, and coordinating with multiple users created technical complexity.  

4. **Scalability**  
   - Designing a platform that could scale to handle a growing inventory, increasing user base, and additional services required careful architecture planning.  

5. **Technical Constraints**  
   - Handling dynamic features like AI-based item recommendations and chatbot integrations required seamless API handling.  
   - We overcame these challenges by optimizing API calls and caching results to improve performance.

6. **Sustainability Metrics Calculation**  
   - Accurately tracking and displaying the environmental impact (e.g., waste reduced, CO2 emissions saved) required creating a reliable formula and collecting data from various sources.  
   - We worked with simple yet impactful metrics to provide meaningful insights to users.  

## Accomplishments that we're proud of
1. **Promoting Sustainability**  
   - Successfully created a platform that encourages the reuse of event materials, reducing waste and fostering eco-friendly practices within the university community.  
   - Developed a sustainability tracker that quantifies the environmental impact, helping users see the real-world benefits of their actions.

2. **Empowering Students**  
   - Designed a student-centered delivery network that provides flexible job opportunities, empowering students to earn money while contributing to campus events.  
   - Enabled students to take an active role in reducing waste and driving campus collaboration.

3. **Simplifying Event Logistics**  
   - Streamlined the process of reserving and delivering event supplies, making it significantly easier for clubs and organizations to organize events.  
   - Created a user-friendly interface that makes browsing, booking, and scheduling seamless for users.

4. **Creating a Positive Community Impact**  
   - Built a platform that brings together students, organizations, and businesses to work toward a common goal of sustainability and collaboration.  
   - Inspired others on campus to think about the environmental and social impact of their events.

## What we learned
1. **The Power of Collaboration**  
   - Collaboration was at the heart of this project—bringing together ideas from team members, feedback from users, and input from local businesses taught us the importance of diverse perspectives in building impactful solutions.

2. **Sustainability in Action**  
   - We deepened our understanding of how small, incremental changes—such as reusing event items or reducing transportation inefficiencies—can make a significant impact on sustainability.  
   - We also learned how to quantify sustainability metrics like waste reduction and CO2 savings to highlight the value of eco-friendly practices.

3. **User-Centered Design**  
   - Working closely with students, event organizers, and delivery drivers taught us the importance of designing an intuitive and user-friendly platform.  
   - We learned how to prioritize features that address real pain points while ensuring a seamless experience for all users.

4. **Overcoming Technical Challenges**  
   - Building a scalable, AI-powered platform helped us learn how to handle complex technical requirements, such as inventory management, real-time logistics, and route optimization.  

5. **The Role of Incentives in Adoption**  
   - Encouraging users to adopt a new platform required more than just building features—it required showing them the value it brings. We learned how to design incentives like sustainability metrics, and job opportunities to drive engagement.

6. **Adaptability and Problem-Solving**  
   - Throughout the process, we faced unexpected challenges, from handling delivery scheduling conflicts to ensuring trust in the driver network. We learned to adapt quickly, iterating on our solutions and improving the platform step by step.

7. **Community and Impact**  
   - This project reinforced the importance of creating solutions that not only address practical problems but also foster a sense of community and collective impact. Seeing how students and clubs could come together for a common goal was incredibly rewarding.

## What's next for UIC ReuseConnect
1. **Expanding the Inventory**  
   - Collaborate with more clubs, organizations, and even university departments to grow the inventory of reusable event items.  
   - Introduce partnerships with local businesses to add more specialized event supplies, such as catering equipment and custom decorations.

2. **Advanced AI Features**  
   - Enhance the recommendation system by incorporating more user data and feedback to make item and service suggestions even smarter.  
   - Use AI to predict demand for certain items during peak times (e.g., spring fairs, graduation ceremonies) to improve inventory availability and logistics.

3. **Gamification for Sustainability**  
   - Add gamification features such as badges, leaderboards, and rewards to encourage users to adopt sustainable practices, like reusing items or carpooling for deliveries.  

4. **Scaling Beyond a Single Campus**  
   - Expand the platform to other universities to create a wider network of sustainable event planning.  
   - Develop a multi-campus system where universities can share surplus inventory and resources.  

5. **Improved Delivery Logistics**  
   - Introduce advanced delivery tracking and scheduling features, including real-time updates and estimated time of arrival (ETA) for deliveries.  

6. **Enhanced User Engagement**  
   - Create detailed sustainability reports for users, showing their individual contributions to waste reduction and CO2 savings.  
   - Introduce features like event templates, where users can save or share commonly used setups for specific event types.  

7. **Integration with Campus Systems**  
   - Partner with universities to integrate the platform with existing campus systems, such as event management tools or student job boards, for seamless adoption.  
   - Work with sustainability offices to align the platform with campus-wide eco-friendly initiatives.  
