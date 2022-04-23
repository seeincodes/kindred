# Kindred
Kindred is a social recovery multisig dapp built on the gnosis safe  that enables users to distribute funds from their wallets to family members, loved ones and friends for when they pass away.
<img width="284" alt="Asset%2017%402x" src="https://user-images.githubusercontent.com/69260613/164895692-0e6e2bc4-3b15-4dcc-80fe-bd78d9f3bd5f.png">


# Problem
Death is something that will unfortunately happen to all humans have to face. The distribution of funds in the wallets of individuals is traditionally done through a will. This method is mostly done offchain , on a sheet of paper and vulnerable to conflicts between family members. Kindred looks to solve this by providing a  social recovery multisig wallet that disperses funds to the deceased desired loved one.

# Solution
Users will  be able to setup a Social Recovery MultiSig wallet with as many beneficiairies as they like.They  will also be able to assign percentages to each beneficiary when they are alive. When the  user is dead,  a minimum of 5 their most trusted beneficiaries will need to vote to validate the death. This condition would need to be met in order to release funds. Funds will be on hold for 30 days to give the creator of the find time to void the transaction in case of conspiracy to falsely retrieve funds. We will send notifications via ENPS to the supposed deceased individual to validate thier death.

# How Kindred works
We will have a very simple UI for users to fill in beneficiaries information, such as their wallet address, percentage of funds to be dispersed to each wallet, and a name. They’ll connect existing wallets using their ENS, wallet connect and metamask