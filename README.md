# Kindred
Kindred is a social recovery multisig dapp built on the gnosis safe  that enables users to distribute funds from their wallets to family members, loved ones and friends for when they pass away.

<img width="284" alt="Asset%2017%402x" src="https://user-images.githubusercontent.com/69260613/164895692-0e6e2bc4-3b15-4dcc-80fe-bd78d9f3bd5f.png">


# Problem
Death is something that will unfortunately happen to all humans have to face. The distribution of funds in the wallets of individuals is traditionally done through a will. This method is mostly done offchain , on a sheet of paper and vulnerable to conflicts between family members. Kindred looks to solve this by providing a  social recovery multisig wallet that disperses funds to the deceased desired loved one.

# Solution
Users will  be able to setup a Social Recovery MultiSig wallet with as many beneficiairies as they like.They  will also be able to assign percentages to each beneficiary when they are alive. When the  user is dead,  a minimum of 5 their most trusted beneficiaries will need to vote to validate the death. This condition would need to be met in order to release funds. Funds will be on hold for 30 days to give the creator of the find time to void the transaction in case of conspiracy to falsely retrieve funds. We will send notifications via EPNS S to the supposed deceased individual to validate thier death.

**MVP**

1. User log in
2. Form to fill out list of beneficiaries 
3. Multisig wallet with the beneficiaries with Gnosis
4. Notification to the beneficiaries using ENPS

**Phase 2:**

1.Creating a vault to store a users seed phrases, so that in case of death the details can be sent to their friends and family. This will still follow the multisig wallet validation and 30 day grace period.
2. Creating a staking functionality for the dapp to allow users to gain interest for thier investments
3. Creating a Kndred token for users to stke

# How Kindred works
We will have a very simple UI for users to fill in beneficiaries information, such as their wallet address, percentage of funds to be dispersed to each wallet, and a name. They’ll connect existing wallets using their ENS, wallet connect and metamask. Users will need to have a minimum of $100 worth of tokens in order to register on the platform.

# Market Analysis
It remains challenging to find solutions that help solve problems for people to put together a will &trust for loves ones. After doing some anecdotal research with a few hackers present at ETH Amsterdam, there was a majority consensus that people dont have this already set in place. This shows us that there is a need for kindred for both crypto and non-crypto natives.

# How would Kindred make money?
- We will allow  people to stake their crypto coins with us so theyh have their own high interest trust fund with more robust defi strategies to be explored in the future
- Taking 0.01% of  the transactions between beneficiaries  and also for changes to be made of beneficiaries
- Transaction fee of $5 for the first  5 users and $2 for any additional user  when new users get onboarded  to our multisig wallet
- Tokenomics

# Why the Project  wouldn't work?
Staking companies and provide this beneficiary service. So we should figure a reason for why it would be more beneficial for people to use our service. 

# Impact
Social Impact - This would be helpful for families whose parents would like to transfer funds to different family members without the risk of the funds going to other people who   weren't assigned the funds pre the user's death.
Education -  We also plan on developing education programmes to raise awareness of the importance of kindred and why all folks no matter thier age  can know about the importance of setting up this functionality for their wallet.

# Link to prototype
kndred.xyz

# Team Members
 - Xian Zheng - Software Engineer
 -  Oyin Adebayo - Business Development & Research
 -  Stephany Rodrigruez - Designer
 -  Katia Gilligan - Software Engineer
