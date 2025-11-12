# 3-Question Mood Assessment & Scoring System

## The 3 Essential Questions

### Question 1: Energy & Motivation Level

**"How would you describe your energy today?"**

- A) High energy, motivated and ready to take on challenges (10 points)
- B) Good energy, feeling positive and active (8 points)
- C) Moderate energy, neither high nor low (6 points)
- D) Low energy, feeling tired or unmotivated (4 points)
- E) Very low energy, struggling to do basic tasks (2 points)

### Question 2: Emotional State & Support Need

**"How are you feeling emotionally right now?"**
- A) Great! Happy, content, or excited (10 points)
- B) Pretty good, calm and stable (8 points)
- C) Okay, neither good nor bad (6 points)
- D) Not great, sad, anxious, or frustrated (4 points)
- E) Really struggling, depressed, angry, or overwhelmed (2 points)

### Question 3: Social Capacity & Desire to Help

**"How do you feel about connecting with others today?"**

- A) Want to help others and share positivity (10 points)
- B) Open to chatting and supporting someone (8 points)
- C) Neutral about social interaction (6 points)
- D) Need someone to talk to, seeking support (4 points)
- E) Really need help, feeling isolated or desperate (2 points)

## Scoring Matrix & Mood Classification

### Total Score Ranges:

- **24-30 points**: Helper/Supporter
- **18-23 points**: Stable/Balanced
- **12-17 points**: Needs Moderate Support
- **6-11 points**: Needs High Support/Crisis

## Detailed Mood Profiles & Scores

| Mood Category           | Score Range | Crisis Level | Support Need | Support Capacity | Stability | Matching Priority              |
| ----------------------- | ----------- | ------------ | ------------ | ---------------- | --------- | ------------------------------ |
| **HELPER/SUPPORTER**    | 24-30       | 0-10         | 10-30        | 80-95            | 85-95     | Match with struggling users    |
| - Joyful/Excited        | 28-30       | 5            | 15           | 90               | 90        | High priority helper           |
| - Content/Peaceful      | 26-29       | 0            | 20           | 85               | 95        | Best stable supporter          |
| - Confident/Proud       | 25-28       | 5            | 25           | 80               | 85        | Good motivator                 |
| **STABLE/BALANCED**     | 18-23       | 15-25        | 30-50        | 60-75            | 70-80     | Can match with anyone          |
| - Calm/Neutral          | 20-23       | 15           | 35           | 70               | 80        | Reliable listener              |
| - Curious/Interested    | 19-22       | 20           | 40           | 65               | 75        | Good conversationalist         |
| - Surprised/Alert       | 18-21       | 25           | 45           | 60               | 70        | Engaging partner               |
| **MODERATE SUPPORT**    | 12-17       | 30-50        | 55-70        | 40-55            | 50-65     | Match with helpers/stable      |
| - Sad/Disappointed      | 14-17       | 35           | 60           | 50               | 60        | Needs gentle support           |
| - Anxious/Worried       | 13-16       | 40           | 65           | 45               | 55        | Needs calming influence        |
| - Frustrated/Annoyed    | 12-15       | 30           | 55           | 55               | 65        | Needs patient listener         |
| - Confused/Uncertain    | 14-16       | 25           | 60           | 50               | 50        | Needs guidance                 |
| **HIGH SUPPORT/CRISIS** | 6-11        | 60-90        | 80-95        | 10-30            | 20-40     | URGENT: Match with top helpers |
| - Depressed/Hopeless    | 6-9         | 80           | 90           | 15               | 25        | Crisis intervention needed     |
| - Angry/Furious         | 8-11        | 70           | 85           | 25               | 35        | Needs de-escalation            |
| - Scared/Terrified      | 7-10        | 85           | 95           | 10               | 20        | Immediate comfort needed       |
| - Lonely/Isolated       | 9-11        | 60           | 80           | 30               | 40        | Needs connection               |

## Advanced Scoring Algorithm

### Individual Question Weights:

- **Question 1 (Energy)**: 35% weight - Indicates capacity to engage
- **Question 2 (Emotion)**: 40% weight - Core emotional state
- **Question 3 (Social)**: 25% weight - Support giving/receiving balance

### Calculation Examples:
 
**Example 1: Struggling User**

- Q1: D (4 points) - Low energy
- Q2: E (2 points) - Really struggling
- Q3: E (2 points) - Need help desperately
- **Total: 8 points** → High Support/Crisis category
- Scores: Crisis=85, Need=90, Capacity=15, Stability=25

**Example 2: Helper User**

- Q1: A (10 points) - High energy
- Q2: A (10 points) - Feeling great
- Q3: A (10 points) - Want to help others
- **Total: 30 points** → Helper/Supporter category
- Scores: Crisis=5, Need=15, Capacity=90, Stability=90

**Example 3: Balanced User**

- Q1: C (6 points) - Moderate energy
- Q2: B (8 points) - Pretty good
- Q3: B (8 points) - Open to chat
- **Total: 22 points** → Stable/Balanced category
- Scores: Crisis=15, Need=35, Capacity=70, Stability=80

## Matchmaking Logic Based on Scores

### Priority Matching Rules:

1. **Crisis Users (6-11 points)**: ONLY match with Helpers (24-30 points)
2. **Moderate Support (12-17 points)**: Match with Helpers or Stable users
3. **Stable Users (18-23 points)**: Can match with anyone except other Crisis users
4. **Helpers (24-30 points)**: Prioritize Crisis and Moderate Support users

### Safety Filters:

- Never match two Crisis level users (both <12 points)
- If Crisis user, emergency resources must be provided immediately
- Helpers get maximum 2 Crisis users per session to prevent burnout

### Matching Compatibility Score:

```
Compatibility = (|User1_Capacity - User2_Need| + |User2_Capacity - User1_Need|) / 2
Lower score = Better match
```

**Perfect Match Examples:**

- Crisis User (Need=90, Capacity=15) + Helper (Need=15, Capacity=90) = Compatibility Score: 0
- Moderate User (Need=60, Capacity=50) + Stable User (Need=35, Capacity=70) = Score: 12.5

## Implementation Flow

1. **User takes 3-question assessment** (30 seconds)
2. **System calculates total score** and assigns category
3. **Algorithm finds best match** based on compatibility
4. **Safety check** - Crisis users get immediate resources
5. **Match confirmation** - Both users accept/decline
6. **Conversation begins** with appropriate context/guidelines

This system gives you precise mood assessment and matchmaking logic while keeping the user experience incredibly simple!

# Implementation:
```js 
// Mood Assessment Scoring Algorithm

class MoodAssessment {
    constructor() {
        // Question weights for scoring calculation
        this.weights = {
            energy: 0.35,      // Question 1: Energy & Motivation
            emotion: 0.40,     // Question 2: Emotional State  
            social: 0.25       // Question 3: Social Capacity
        };

        // Score ranges for categories
        this.categories = {
            CRISIS: { min: 6, max: 11, name: "High Support/Crisis" },
            MODERATE: { min: 12, max: 17, name: "Needs Moderate Support" },
            STABLE: { min: 18, max: 23, name: "Stable/Balanced" },
            HELPER: { min: 24, max: 30, name: "Helper/Supporter" }
        };

        // Detailed mood profiles with scores
        this.moodProfiles = {
            // CRISIS CATEGORY (6-11 points)
            6: { mood: "Severely Depressed", crisis: 90, need: 95, capacity: 10, stability: 20 },
            7: { mood: "Scared/Terrified", crisis: 85, need: 95, capacity: 10, stability: 20 },
            8: { mood: "Angry/Furious", crisis: 70, need: 85, capacity: 25, stability: 35 },
            9: { mood: "Depressed/Hopeless", crisis: 80, need: 90, capacity: 15, stability: 25 },
            10: { mood: "Overwhelmed", crisis: 75, need: 85, capacity: 20, stability: 30 },
            11: { mood: "Lonely/Isolated", crisis: 60, need: 80, capacity: 30, stability: 40 },

            // MODERATE SUPPORT (12-17 points)
            12: { mood: "Frustrated/Annoyed", crisis: 30, need: 55, capacity: 55, stability: 65 },
            13: { mood: "Anxious/Worried", crisis: 40, need: 65, capacity: 45, stability: 55 },
            14: { mood: "Sad/Disappointed", crisis: 35, need: 60, capacity: 50, stability: 60 },
            15: { mood: "Confused/Uncertain", crisis: 25, need: 60, capacity: 50, stability: 50 },
            16: { mood: "Mildly Anxious", crisis: 30, need: 55, capacity: 55, stability: 65 },
            17: { mood: "Disappointed", crisis: 25, need: 50, capacity: 60, stability: 70 },

            // STABLE/BALANCED (18-23 points)
            18: { mood: "Surprised/Alert", crisis: 25, need: 45, capacity: 60, stability: 70 },
            19: { mood: "Curious/Interested", crisis: 20, need: 40, capacity: 65, stability: 75 },
            20: { mood: "Calm/Neutral", crisis: 15, need: 35, capacity: 70, stability: 80 },
            21: { mood: "Focused/Engaged", crisis: 15, need: 30, capacity: 75, stability: 85 },
            22: { mood: "Pleasant/Good", crisis: 10, need: 25, capacity: 75, stability: 85 },
            23: { mood: "Optimistic", crisis: 10, need: 20, capacity: 80, stability: 90 },

            // HELPER/SUPPORTER (24-30 points)
            24: { mood: "Confident/Proud", crisis: 5, need: 25, capacity: 80, stability: 85 },
            25: { mood: "Happy/Content", crisis: 5, need: 20, capacity: 85, stability: 90 },
            26: { mood: "Peaceful/Blessed", crisis: 0, need: 20, capacity: 85, stability: 95 },
            27: { mood: "Enthusiastic", crisis: 5, need: 15, capacity: 90, stability: 90 },
            28: { mood: "Joyful/Excited", crisis: 5, need: 15, capacity: 90, stability: 90 },
            29: { mood: "Inspired/Motivated", crisis: 0, need: 10, capacity: 95, stability: 95 },
            30: { mood: "Euphoric/Elated", crisis: 5, need: 10, capacity: 95, stability: 90 }
        };
    }

    // Calculate total score from 3 questions
    calculateTotalScore(answers) {
        const { energy, emotion, social } = answers;
        
        // Validate inputs
        if (!this.isValidAnswer(energy) || !this.isValidAnswer(emotion) || !this.isValidAnswer(social)) {
            throw new Error("Invalid answer values. Must be between 2 and 10 (even numbers only)");
        }

        return energy + emotion + social;
    }

    // Validate individual answers
    isValidAnswer(answer) {
        const validAnswers = [2, 4, 6, 8, 10];
        return validAnswers.includes(answer);
    }

    // Get category based on total score
    getCategory(totalScore) {
        if (totalScore >= this.categories.HELPER.min && totalScore <= this.categories.HELPER.max) {
            return "HELPER";
        } else if (totalScore >= this.categories.STABLE.min && totalScore <= this.categories.STABLE.max) {
            return "STABLE";
        } else if (totalScore >= this.categories.MODERATE.min && totalScore <= this.categories.MODERATE.max) {
            return "MODERATE";
        } else if (totalScore >= this.categories.CRISIS.min && totalScore <= this.categories.CRISIS.max) {
            return "CRISIS";
        } else {
            throw new Error("Invalid total score range");
        }
    }

    // Get detailed mood profile
    getMoodProfile(totalScore) {
        return this.moodProfiles[totalScore] || null;
    }

    // Main assessment function
    assessMood(answers) {
        const totalScore = this.calculateTotalScore(answers);
        const category = this.getCategory(totalScore);
        const profile = this.getMoodProfile(totalScore);

        return {
            totalScore,
            category,
            categoryName: this.categories[category].name,
            mood: profile.mood,
            scores: {
                crisis: profile.crisis,
                supportNeed: profile.need,
                supportCapacity: profile.capacity,
                stability: profile.stability
            },
            isCrisis: category === "CRISIS",
            needsImmedateHelp: profile.crisis >= 70,
            canHelpOthers: profile.capacity >= 70
        };
    }

    // Generate assessment questions
    getQuestions() {
        return [
            {
                id: "energy",
                question: "How would you describe your energy today?",
                options: [
                    { value: 10, text: "High energy, motivated and ready to take on challenges", points: 10 },
                    { value: 8, text: "Good energy, feeling positive and active", points: 8 },
                    { value: 6, text: "Moderate energy, neither high nor low", points: 6 },
                    { value: 4, text: "Low energy, feeling tired or unmotivated", points: 4 },
                    { value: 2, text: "Very low energy, struggling to do basic tasks", points: 2 }
                ]
            },
            {
                id: "emotion", 
                question: "How are you feeling emotionally right now?",
                options: [
                    { value: 10, text: "Great! Happy, content, or excited", points: 10 },
                    { value: 8, text: "Pretty good, calm and stable", points: 8 },
                    { value: 6, text: "Okay, neither good nor bad", points: 6 },
                    { value: 4, text: "Not great, sad, anxious, or frustrated", points: 4 },
                    { value: 2, text: "Really struggling, depressed, angry, or overwhelmed", points: 2 }
                ]
            },
            {
                id: "social",
                question: "How do you feel about connecting with others today?",
                options: [
                    { value: 10, text: "Want to help others and share positivity", points: 10 },
                    { value: 8, text: "Open to chatting and supporting someone", points: 8 },
                    { value: 6, text: "Neutral about social interaction", points: 6 },
                    { value: 4, text: "Need someone to talk to, seeking support", points: 4 },
                    { value: 2, text: "Really need help, feeling isolated or desperate", points: 2 }
                ]
            }
        ];
    }
}

// Matchmaking Algorithm
class MatchmakingAlgorithm {
    constructor() {
        this.moodAssessment = new MoodAssessment();
    }

    // Calculate compatibility score between two users
    calculateCompatibility(user1Profile, user2Profile) {
        const needCapacityMatch1 = Math.abs(user1Profile.scores.supportNeed - user2Profile.scores.supportCapacity);
        const needCapacityMatch2 = Math.abs(user2Profile.scores.supportNeed - user1Profile.scores.supportCapacity);
        
        return (needCapacityMatch1 + needCapacityMatch2) / 2;
    }

    // Safety check for matching
    isSafeMatch(user1Profile, user2Profile) {
        // Never match two crisis users
        if (user1Profile.category === "CRISIS" && user2Profile.category === "CRISIS") {
            return false;
        }

        // Crisis users should only match with helpers or very stable users
        if (user1Profile.category === "CRISIS") {
            return user2Profile.scores.supportCapacity >= 70 && user2Profile.scores.stability >= 70;
        }

        if (user2Profile.category === "CRISIS") {
            return user1Profile.scores.supportCapacity >= 70 && user1Profile.scores.stability >= 70;
        }

        return true;
    }

    // Find best match from pool of users
    findBestMatch(currentUser, userPool) {
        const currentProfile = currentUser.profile;
        let bestMatch = null;
        let bestCompatibilityScore = Infinity;

        for (let candidate of userPool) {
            // Skip self
            if (candidate.id === currentUser.id) continue;

            // Safety check
            if (!this.isSafeMatch(currentProfile, candidate.profile)) continue;

            // Calculate compatibility
            const compatibilityScore = this.calculateCompatibility(currentProfile, candidate.profile);

            // Update best match if this is better
            if (compatibilityScore < bestCompatibilityScore) {
                bestCompatibilityScore = compatibilityScore;
                bestMatch = candidate;
            }
        }

        return {
            match: bestMatch,
            compatibilityScore: bestCompatibilityScore,
            matchQuality: this.getMatchQuality(bestCompatibilityScore)
        };
    }

    // Categorize match quality
    getMatchQuality(compatibilityScore) {
        if (compatibilityScore <= 10) return "EXCELLENT";
        if (compatibilityScore <= 20) return "GOOD"; 
        if (compatibilityScore <= 35) return "FAIR";
        return "POOR";
    }

    // Get matching priority for crisis intervention
    getMatchingPriority(userProfile) {
        if (userProfile.isCrisis || userProfile.needsImmedateHelp) {
            return "URGENT";
        }
        if (userProfile.category === "MODERATE") {
            return "HIGH";
        }
        return "NORMAL";
    }
}

// Usage Example and Testing
function runExample() {
    const assessment = new MoodAssessment();
    const matchmaking = new MatchmakingAlgorithm();

    // Example 1: Crisis user
    console.log("=== CRISIS USER EXAMPLE ===");
    const crisisAnswers = { energy: 2, emotion: 2, social: 4 }; // Total: 8
    const crisisProfile = assessment.assessMood(crisisAnswers);
    console.log("Crisis User Profile:", crisisProfile);

    // Example 2: Helper user  
    console.log("\n=== HELPER USER EXAMPLE ===");
    const helperAnswers = { energy: 10, emotion: 10, social: 8 }; // Total: 28
    const helperProfile = assessment.assessMood(helperAnswers);
    console.log("Helper User Profile:", helperProfile);

    // Example 3: Stable user
    console.log("\n=== STABLE USER EXAMPLE ===");
    const stableAnswers = { energy: 6, emotion: 8, social: 8 }; // Total: 22  
    const stableProfile = assessment.assessMood(stableAnswers);
    console.log("Stable User Profile:", stableProfile);

    // Test compatibility
    console.log("\n=== COMPATIBILITY TESTING ===");
    const compatibility1 = matchmaking.calculateCompatibility(crisisProfile, helperProfile);
    console.log(`Crisis + Helper Compatibility Score: ${compatibility1} (Lower is better)`);

    const safeMatch = matchmaking.isSafeMatch(crisisProfile, helperProfile);
    console.log(`Is Crisis + Helper a safe match? ${safeMatch}`);

    // Test pool matching
    console.log("\n=== POOL MATCHING EXAMPLE ===");
    const currentUser = { id: "user1", profile: crisisProfile };
    const userPool = [
        { id: "user2", profile: helperProfile },
        { id: "user3", profile: stableProfile },
        { id: "user4", profile: assessment.assessMood({ energy: 4, emotion: 4, social: 6 }) } // Moderate user
    ];

    const bestMatch = matchmaking.findBestMatch(currentUser, userPool);
    console.log("Best Match Result:", bestMatch);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MoodAssessment, MatchmakingAlgorithm };
}

// Run example if in browser/node
runExample();
```
