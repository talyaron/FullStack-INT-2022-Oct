class Word {
    uid: string;
    constructor(
        public name: string,
    ) {
        this.uid = uid();
    }
    public includesLetter(letter: string): boolean{
        return this.name.toUpperCase().includes(letter);    
    }

    public letterRepetitions(letter: string): number | undefined{
        try {
            let repetitions: number = 0;
            for(let i=0; i<WORD_LENGTH; i++){
                if (this.name.toUpperCase()[i] === letter) repetitions++;
            }
            console.log(`repetitions=${repetitions}`);
            return repetitions;

        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

}


//blue = if the letter repeats 2 / 3 times 

class User {
    uid: string;
    constructor(
        public streak: number,

    ) {
        this.uid = uid();
    }
}



const wordsArray: Word[] = [];

wordsArray.push(
    new Word("aback"),
    new Word("abase"),
    new Word("abase"),
    new Word("abate"),
    new Word("abbey"),
    new Word("abbot"),
    new Word("abhor"),
    new Word("abide"),
    new Word("abled"),
    new Word("abode"),
    new Word("abort"),
    new Word("about"),
    new Word("above"),
    new Word("abuse"),
    new Word("abyss"),
    new Word("acorn"),
    new Word("acorn"),
    new Word("acrid"),
    new Word("actor"),
    new Word("acute"),
    new Word("adage"),
    new Word("adapt"),
    new Word("adept"),
    new Word("admin"),
    new Word("admit"),
    new Word("adobe"),
    new Word("adopt"),
    new Word("adorn"),
    new Word("adult"),
    new Word("affix"),
    new Word("afire"),
    new Word("afoot"),
    new Word("afoul"),
    new Word("after"),
    new Word("again"),
    new Word("agape"),
    new Word("agate"),
    new Word("agent"),
    new Word("agile"),
    new Word("aging"),
    new Word("aglow"),
    new Word("agony"),
    new Word("agree"),
    new Word("ahead"),
    new Word("aider"),
    new Word("aisle"),
    new Word("alarm"),
    new Word("album"),
    new Word("alert"),
    new Word("algae"),
    new Word("alibi"),
    new Word("alien"),
    new Word("align"),
    new Word("alike"),
    new Word("alive"),
    new Word("allay"),
    new Word("alley"),
    new Word("allot"),
    new Word("allow"),
    new Word("alloy"),
    new Word("aloft"),
    new Word("alone"),
    new Word("along"),
    new Word("aloof"),
    new Word("aloud"),
    new Word("alpha"),
    new Word("altar"),
    new Word("alter"),
    new Word("amass"),
    new Word("amaze"),
    new Word("amber"),
    new Word("amble"),
    new Word("amend"),
    new Word("amiss"),
    new Word("amity"),
    new Word("among"),
    new Word("ample"),
    new Word("amply"),
    new Word("amuse"),
    new Word("angel"),
    new Word("anger"),
    new Word("angle"),
    new Word("angry"),
    new Word("angst"),
    new Word("anime"),
    new Word("ankle"),
    new Word("annex"),
    new Word("annoy"),
    new Word("annul"),
    new Word("anode"),
    new Word("antic"),
    new Word("anvil"),
    new Word("aorta"),
    new Word("apart"),
    new Word("aphid"),
    new Word("aping"),
    new Word("apnea"),
    new Word("apple"),
    new Word("apply"),
    new Word("apron"),
    new Word("aptly"),
    new Word("arbor"),
    new Word("ardor"),
    new Word("arena"),
    new Word("argue"),
    new Word("arise"),
    new Word("armor"),
    new Word("aroma"),
    new Word("arose"),
    new Word("array"),
    new Word("arrow"),
    new Word("arson"),
    new Word("artsy"),
    new Word("ascot"),
    new Word("ashen"),
    new Word("aside"),
    new Word("askew"),
    new Word("assay"),
    new Word("asset"),
    new Word("atoll"),
    new Word("atone"),
    new Word("attic"),
    new Word("audio"),
    new Word("audit"),
    new Word("augur"),
    new Word("aunty"),
    new Word("avail"),
    new Word("avert"),
    new Word("avian"),
    new Word("avoid"),
    new Word("await"),
    new Word("awake"),
    new Word("award"),
    new Word("aware"),
    new Word("awash"),
    new Word("awful"),
    new Word("awoke"),
    new Word("axial"),
    new Word("axiom"),
    new Word("axion"),
    new Word("azure"),
)


const x: string[] = ['bacon', 'badge'] badly bagel baggy baker baler balmy banal banjo barge baron basal basic basil basin basis baste batch bathe baton batty bawdy bayou beach beady beard beast beech beefy befit began begat beget begin begun being belch belie belle belly below bench beret berry berth beset betel bevel bezel bible bicep biddy bigot bilge billy binge bingo biome birch birth bison bitty black blade blame bland blank blare blast blaze bleak bleat bleed bleep blend bless blimp blind blink bliss blitz bloat block bloke blond blood bloom blown bluer bluff blunt blurb blurt blush board boast bobby boney bongo bonus booby boost booth booty booze boozy borax borne bosom bossy botch bough boule bound bowel boxer brace braid brain brake brand brash brass brave bravo brawl brawn bread break breed briar bribe brick bride brief brine bring brink briny brisk broad broil broke brood brook broom broth brown brunt brush brute buddy budge buggy bugle build built bulge bulky bully bunch bunny burly burnt burst bused bushy butch butte buxom buyer bylaw

