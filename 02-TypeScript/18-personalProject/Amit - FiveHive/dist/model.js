var Word = /** @class */ (function () {
    function Word(name) {
        this.name = name;
        this.uid = uid();
    }
    Word.prototype.includesLetter = function (letter) {
        return this.name.toUpperCase().includes(letter);
    };
    Word.prototype.letterRepetitions = function (letter) {
        var repetitions = 0;
        for (var i = 0; i < WORD_LENGTH; i++) {
            if (this.name.toUpperCase()[i] === letter)
                repetitions++;
        }
        return repetitions;
    };
    return Word;
}());
//////////////////////////////////////////////////////////////////////////
var User = /** @class */ (function () {
    function User(streak) {
        this.streak = streak;
        this.uid = uid();
    }
    return User;
}());
/////////////////////////////////////////////////////////////////////////
var wordsArray = [];
wordsArray.push(//A
new Word("aback"), new Word("abase"), new Word("abate"), new Word("abbey"), new Word("abbot"), new Word("abhor"), new Word("abide"), new Word("abled"), new Word("abode"), new Word("abort"), new Word("about"), new Word("above"), new Word("abuse"), new Word("abyss"), new Word("acorn"), new Word("acorn"), new Word("acrid"), new Word("actor"), new Word("acute"), new Word("adage"), new Word("adapt"), new Word("adept"), new Word("admin"), new Word("admit"), new Word("adobe"), new Word("adopt"), new Word("adorn"), new Word("adult"), new Word("affix"), new Word("afire"), new Word("afoot"), new Word("afoul"), new Word("after"), new Word("again"), new Word("agape"), new Word("agate"), new Word("agent"), new Word("agile"), new Word("aging"), new Word("aglow"), new Word("agony"), new Word("agree"), new Word("ahead"), new Word("aider"), new Word("aisle"), new Word("alarm"), new Word("album"), new Word("alert"), new Word("algae"), new Word("alibi"), new Word("alien"), new Word("align"), new Word("alike"), new Word("alive"), new Word("allay"), new Word("alley"), new Word("allot"), new Word("allow"), new Word("alloy"), new Word("aloft"), new Word("alone"), new Word("along"), new Word("aloof"), new Word("aloud"), new Word("alpha"), new Word("altar"), new Word("alter"), new Word("amass"), new Word("amaze"), new Word("amber"), new Word("amble"), new Word("amend"), new Word("amiss"), new Word("amity"), new Word("among"), new Word("ample"), new Word("amply"), new Word("amuse"), new Word("angel"), new Word("anger"), new Word("angle"), new Word("angry"), new Word("angst"), new Word("anime"), new Word("ankle"), new Word("annex"), new Word("annoy"), new Word("annul"), new Word("anode"), new Word("antic"), new Word("anvil"), new Word("aorta"), new Word("apart"), new Word("aphid"), new Word("aping"), new Word("apnea"), new Word("apple"), new Word("apply"), new Word("apron"), new Word("aptly"), new Word("arbor"), new Word("ardor"), new Word("arena"), new Word("argue"), new Word("arise"), new Word("armor"), new Word("aroma"), new Word("arose"), new Word("array"), new Word("arrow"), new Word("arson"), new Word("artsy"), new Word("ascot"), new Word("ashen"), new Word("aside"), new Word("askew"), new Word("assay"), new Word("asset"), new Word("atoll"), new Word("atone"), new Word("attic"), new Word("audio"), new Word("audit"), new Word("augur"), new Word("aunty"), new Word("avail"), new Word("avert"), new Word("avian"), new Word("avoid"), new Word("await"), new Word("awake"), new Word("award"), new Word("aware"), new Word("awash"), new Word("awful"), new Word("awoke"), new Word("axial"), new Word("axiom"), new Word("axion"), new Word("azure"));
wordsArray.push(//B
new Word("bacon"), new Word("badge"), new Word("badly"), new Word("bagel"), new Word("baggy"), new Word("baker"), new Word("baler"), new Word("balmy"), new Word("banal"), new Word("banjo"), new Word("barge"), new Word("baron"), new Word("basal"), new Word("basic"), new Word("basil"), new Word("basin"), new Word("basis"), new Word("baste"), new Word("batch"), new Word("bathe"), new Word("baton"), new Word("batty"), new Word("bawdy"), new Word("bayou"), new Word("beach"), new Word("beady"), new Word("beard"), new Word("beast"), new Word("beech"), new Word("beefy"), new Word("befit"), new Word("began"), new Word("begat"), new Word("beget"), new Word("begin"), new Word("begun"), new Word("being"), new Word("belch"), new Word("belie"), new Word("belle"), new Word("belly"), new Word("below"), new Word("bench"), new Word("beret"), new Word("berry"), new Word("berth"), new Word("beset"), new Word("betel"), new Word("bevel"), new Word("bezel"), new Word("bible"), new Word("bicep"), new Word("biddy"), new Word("bigot"), new Word("bilge"), new Word("billy"), new Word("binge"), new Word("bingo"), new Word("biome"), new Word("birch"), new Word("birth"), new Word("bison"), new Word("bitty"), new Word("black"), new Word("blade"), new Word("blame"), new Word("bland"), new Word("blank"), new Word("blare"), new Word("blast"), new Word("blaze"), new Word("bleak"), new Word("bleat"), new Word("bleed"), new Word("bleep"), new Word("blend"), new Word("bless"), new Word("blimp"), new Word("blind"), new Word("blink"), new Word("bliss"), new Word("blitz"), new Word("bloat"), new Word("block"), new Word("bloke"), new Word("blond"), new Word("blood"), new Word("bloom"), new Word("blown"), new Word("bluer"), new Word("bluff"), new Word("blunt"), new Word("blurb"), new Word("blurt"), new Word("blush"), new Word("board"), new Word("boast"), new Word("bobby"), new Word("boney"), new Word("bongo"), new Word("bonus"), new Word("booby"), new Word("boost"), new Word("booth"), new Word("booty"), new Word("booze"), new Word("boozy"), new Word("borax"), new Word("borne"), new Word("bosom"), new Word("bossy"), new Word("botch"), new Word("bough"), new Word("boule"), new Word("bound"), new Word("bowel"), new Word("boxer"), new Word("brace"), new Word("braid"), new Word("brain"), new Word("brake"), new Word("brand"), new Word("brash"), new Word("brass"), new Word("brave"), new Word("bravo"), new Word("brawl"), new Word("brawn"), new Word("bread"), new Word("break"), new Word("breed"), new Word("briar"), new Word("bribe"), new Word("brick"), new Word("bride"), new Word("brief"), new Word("brine"), new Word("bring"), new Word("brink"), new Word("briny"), new Word("brisk"), new Word("broad"), new Word("broil"), new Word("broke"), new Word("brood"), new Word("brook"), new Word("broom"), new Word("broth"), new Word("brown"), new Word("brunt"), new Word("brush"), new Word("brute"), new Word("buddy"), new Word("budge"), new Word("buggy"), new Word("bugle"), new Word("build"), new Word("built"), new Word("bulge"), new Word("bulky"), new Word("bully"), new Word("bunch"), new Word("bunny"), new Word("burly"), new Word("burnt"), new Word("burst"), new Word("bused"), new Word("bushy"), new Word("butch"), new Word("butte"), new Word("buxom"), new Word("buyer"), new Word("bylaw"));
wordsArray.push(//C                                          
new Word("cabal"), new Word("cabby"), new Word("cabin"), new Word("cable"), new Word("cacao"), new Word("cache"), new Word("cacti"), new Word("caddy"), new Word("cadet"), new Word("cagey"), new Word("cairn"), new Word("camel"), new Word("cameo"), new Word("canal"), new Word("candy"), new Word("canny"), new Word("canoe"), new Word("canon"), new Word("caper"), new Word("caput"), new Word("carat"), new Word("cargo"), new Word("cargo"), new Word("carol"), new Word("carry"), new Word("carve"), new Word("caste"), new Word("catch"), new Word("cater"), new Word("catty"), new Word("caulk"), new Word("cause"), new Word("cavil"), new Word("cease"), new Word("cedar"), new Word("cello"), new Word("chafe"), new Word("chaff"), new Word("chain"), new Word("chair"), new Word("chalk"), new Word("champ"), new Word("chant"), new Word("chaos"), new Word("chard"), new Word("charm"), new Word("chart"), new Word("chase"), new Word("chasm"), new Word("cheap"), new Word("cheat"), new Word("check"), new Word("cheek"), new Word("cheer"), new Word("chess"), new Word("chest"), new Word("chick"), new Word("chide"), new Word("chief"), new Word("child"), new Word("chili"), new Word("chill"), new Word("chime"), new Word("china"), new Word("chirp"), new Word("chock"), new Word("choir"), new Word("choke"), new Word("chord"), new Word("chore"), new Word("chose"), new Word("chuck"), new Word("chump"), new Word("chunk"), new Word("churn"), new Word("chute"), new Word("cider"), new Word("cigar"), new Word("cinch"), new Word("circa"), new Word("civic"), new Word("civil"), new Word("clack"), new Word("claim"), new Word("clamp"), new Word("clang"), new Word("clank"), new Word("clash"), new Word("clasp"), new Word("class"), new Word("clean"), new Word("clear"), new Word("cleat"), new Word("cleft"), new Word("clerk"), new Word("click"), new Word("cliff"), new Word("climb"), new Word("cling"), new Word("clink"), new Word("cloak"), new Word("clock"), new Word("clone"), new Word("close"), new Word("cloth"), new Word("cloud"), new Word("clout"), new Word("clove"), new Word("clown"), new Word("cluck"), new Word("clued"), new Word("clump"), new Word("clung"), new Word("coach"), new Word("coast"), new Word("cobra"), new Word("cocoa"), new Word("colon"), new Word("color"), new Word("comet"), new Word("comfy"), new Word("comic"), new Word("comma"), new Word("conch"), new Word("condo"), new Word("conic"), new Word("copse"), new Word("coral"), new Word("corer"), new Word("corny"), new Word("couch"), new Word("cough"), new Word("could"), new Word("count"), new Word("coupe"), new Word("court"), new Word("coven"), new Word("cover"), new Word("covet"), new Word("covey"), new Word("cower"), new Word("coyly"), new Word("crack"), new Word("craft"), new Word("cramp"), new Word("crane"), new Word("crank"), new Word("crash"), new Word("crass"), new Word("crate"), new Word("crave"), new Word("crawl"), new Word("craze"), new Word("crazy"), new Word("creak"), new Word("cream"), new Word("credo"), new Word("creed"), new Word("creek"), new Word("creep"), new Word("creme"), new Word("crepe"), new Word("crept"), new Word("cress"), new Word("crest"), new Word("crick"), new Word("cried"), new Word("crier"), new Word("crime"), new Word("crimp"), new Word("crisp"), new Word("croak"), new Word("crock"), new Word("crone"), new Word("crony"), new Word("crook"), new Word("cross"), new Word("croup"), new Word("crowd"), new Word("crown"), new Word("crude"), new Word("cruel"), new Word("crumb"), new Word("crump"), new Word("crush"), new Word("crust"), new Word("crypt"), new Word("cubic"), new Word("cumin"), new Word("curio"), new Word("curly"), new Word("curry"), new Word("curse"), new Word("curve"), new Word("curvy"), new Word("cutie"), new Word("cyber"), new Word("cycle"), new Word("cynic"));
wordsArray.push(//D                                         
new Word("daddy"), new Word("daily"), new Word("dairy"), new Word("daisy"), new Word("dally"), new Word("dance"), new Word("dandy"), new Word("datum"), new Word("daunt"), new Word("dealt"), new Word("death"), new Word("debar"), new Word("debit"), new Word("debug"), new Word("debut"), new Word("decal"), new Word("decay"), new Word("decor"), new Word("decoy"), new Word("decry"), new Word("defer"), new Word("deign"), new Word("deity"), new Word("delay"), new Word("delta"), new Word("delve"), new Word("demon"), new Word("demur"), new Word("denim"), new Word("dense"), new Word("depot"), new Word("depth"), new Word("derby"), new Word("deter"), new Word("detox"), new Word("deuce"), new Word("devil"), new Word("diary"), new Word("dicey"), new Word("digit"), new Word("dilly"), new Word("dimly"), new Word("diner"), new Word("dingo"), new Word("dingy"), new Word("diode"), new Word("dirge"), new Word("dirty"), new Word("disco"), new Word("ditch"), new Word("ditto"), new Word("ditty"), new Word("diver"), new Word("dizzy"), new Word("dodge"), new Word("dodgy"), new Word("dogma"), new Word("doing"), new Word("donor"), new Word("donut"), new Word("dopey"), new Word("doubt"), new Word("dough"), new Word("dowdy"), new Word("dowel"), new Word("downy"), new Word("dowry"), new Word("dozen"), new Word("draft"), new Word("drain"), new Word("drake"), new Word("drama"), new Word("drank"), new Word("drape"), new Word("drawl"), new Word("drawn"), new Word("dread"), new Word("dream"), new Word("dress"), new Word("dried"), new Word("drier"), new Word("drift"), new Word("drill"), new Word("drink"), new Word("drive"), new Word("droit"), new Word("droll"), new Word("drone"), new Word("drool"), new Word("droop"), new Word("dross"), new Word("drove"), new Word("drown"), new Word("druid"), new Word("drunk"), new Word("dryer"), new Word("dryly"), new Word("duchy"), new Word("dully"), new Word("dummy"), new Word("dumpy"), new Word("dunce"), new Word("dusky"), new Word("dusty"), new Word("dutch"), new Word("duvet"), new Word("dwarf"), new Word("dwell"), new Word("dwelt"), new Word("dying"));
wordsArray.push(//E                                         
new Word("eager"), new Word("eagle"), new Word("early"), new Word("earth"), new Word("easel"), new Word("eaten"), new Word("eater"), new Word("ebony"), new Word("eclat"), new Word("edict"), new Word("edify"), new Word("eerie"), new Word("egret"), new Word("eight"), new Word("eject"), new Word("eking"), new Word("elate"), new Word("elbow"), new Word("elder"), new Word("elect"), new Word("elegy"), new Word("elfin"), new Word("elide"), new Word("elite"), new Word("elope"), new Word("elude"), new Word("email"), new Word("embed"), new Word("ember"), new Word("emcee"), new Word("empty"), new Word("enact"), new Word("endow"), new Word("enema"), new Word("enemy"), new Word("enjoy"), new Word("ennui"), new Word("ensue"), new Word("enter"), new Word("entry"), new Word("envoy"), new Word("epoch"), new Word("epoxy"), new Word("equal"), new Word("equip"), new Word("erase"), new Word("erect"), new Word("erode"), new Word("error"), new Word("erupt"), new Word("essay"), new Word("ester"), new Word("ether"), new Word("ethic"), new Word("ethos"), new Word("etude"), new Word("evade"), new Word("event"), new Word("every"), new Word("evict"), new Word("evoke"), new Word("exact"), new Word("exalt"), new Word("excel"), new Word("exert"), new Word("exile"), new Word("exist"), new Word("expel"), new Word("extol"), new Word("extra"), new Word("exult"), new Word("eying"));
wordsArray.push(//F                                         
new Word("fable"), new Word("facet"), new Word("faint"), new Word("fairy"), new Word("faith"), new Word("false"), new Word("fancy"), new Word("fanny"), new Word("farce"), new Word("fatal"), new Word("fatty"), new Word("fault"), new Word("fauna"), new Word("favor"), new Word("feast"), new Word("fecal"), new Word("feign"), new Word("fella"), new Word("felon"), new Word("femme"), new Word("femur"), new Word("fence"), new Word("feral"), new Word("ferry"), new Word("fetal"), new Word("fetch"), new Word("fetid"), new Word("fetus"), new Word("fever"), new Word("fewer"), new Word("fiber"), new Word("ficus"), new Word("field"), new Word("fiend"), new Word("fiery"), new Word("fifth"), new Word("fifty"), new Word("fight"), new Word("filer"), new Word("filet"), new Word("filly"), new Word("filmy"), new Word("filth"), new Word("final"), new Word("finch"), new Word("finer"), new Word("first"), new Word("fishy"), new Word("fixer"), new Word("fizzy"), new Word("fjord"), new Word("flack"), new Word("flail"), new Word("flair"), new Word("flake"), new Word("flaky"), new Word("flame"), new Word("flank"), new Word("flare"), new Word("flare"), new Word("flash"), new Word("flask"), new Word("fleck"), new Word("fleet"), new Word("flesh"), new Word("flick"), new Word("flier"), new Word("fling"), new Word("flint"), new Word("flirt"), new Word("float"), new Word("flock"), new Word("flood"), new Word("floor"), new Word("flora"), new Word("floss"), new Word("flour"), new Word("flout"), new Word("flown"), new Word("fluff"), new Word("fluid"), new Word("fluke"), new Word("flume"), new Word("flung"), new Word("flunk"), new Word("flush"), new Word("flute"), new Word("flyer"), new Word("foamy"), new Word("focal"), new Word("focus"), new Word("foggy"), new Word("foist"), new Word("folio"), new Word("folly"), new Word("foray"), new Word("force"), new Word("forge"), new Word("forgo"), new Word("forte"), new Word("forth"), new Word("forty"), new Word("forum"), new Word("found"), new Word("foyer"), new Word("frail"), new Word("frame"), new Word("frank"), new Word("fraud"), new Word("freak"), new Word("freed"), new Word("freer"), new Word("fresh"), new Word("friar"), new Word("fried"), new Word("frill"), new Word("frisk"), new Word("fritz"), new Word("frock"), new Word("frond"), new Word("front"), new Word("frost"), new Word("froth"), new Word("frown"), new Word("froze"), new Word("fruit"), new Word("fudge"), new Word("fugue"), new Word("fully"), new Word("fungi"), new Word("funky"), new Word("funny"), new Word("furor"), new Word("furry"), new Word("fussy"), new Word("fuzzy"));
wordsArray.push(//G                                         
new Word("gaffe"), new Word("gaily"), new Word("gamer"), new Word("gamma"), new Word("gamut"), new Word("gassy"), new Word("gaudy"), new Word("gauge"), new Word("gaunt"), new Word("gauze"), new Word("gavel"), new Word("gawky"), new Word("gayer"), new Word("gayly"), new Word("gazer"), new Word("gecko"), new Word("geeky"), new Word("geese"), new Word("genie"), new Word("genre"), new Word("ghost"), new Word("ghoul"), new Word("giant"), new Word("giddy"), new Word("gipsy"), new Word("girly"), new Word("girth"), new Word("given"), new Word("giver"), new Word("glade"), new Word("gland"), new Word("glare"), new Word("glass"), new Word("glaze"), new Word("gleam"), new Word("glean"), new Word("glide"), new Word("glint"), new Word("gloat"), new Word("globe"), new Word("gloom"), new Word("glory"), new Word("gloss"), new Word("glove"), new Word("glyph"), new Word("gnash"), new Word("gnome"), new Word("godly"), new Word("going"), new Word("golem"), new Word("golly"), new Word("gonad"), new Word("goner"), new Word("goody"), new Word("gooey"), new Word("goofy"), new Word("goose"), new Word("gorge"), new Word("gouge"), new Word("gourd"), new Word("grace"), new Word("grade"), new Word("graft"), new Word("grail"), new Word("grain"), new Word("grand"), new Word("grant"), new Word("grape"), new Word("graph"), new Word("grasp"), new Word("grass"), new Word("grate"), new Word("grave"), new Word("gravy"), new Word("graze"), new Word("great"), new Word("greed"), new Word("green"), new Word("greet"), new Word("grief"), new Word("grill"), new Word("grime"), new Word("grimy"), new Word("grind"), new Word("gripe"), new Word("groan"), new Word("groin"), new Word("groom"), new Word("grope"), new Word("gross"), new Word("group"), new Word("grout"), new Word("grove"), new Word("growl"), new Word("grown"), new Word("gruel"), new Word("gruff"), new Word("grunt"), new Word("guard"), new Word("guava"), new Word("guess"), new Word("guest"), new Word("guide"), new Word("guild"), new Word("guile"), new Word("guilt"), new Word("guise"), new Word("gulch"), new Word("gully"), new Word("gumbo"), new Word("gummy"), new Word("guppy"), new Word("gusto"), new Word("gusty"), new Word("gypsy"));
wordsArray.push(//H                                         
new Word("habit"), new Word("hairy"), new Word("halve"), new Word("handy"), new Word("happy"), new Word("hardy"), new Word("harem"), new Word("harpy"), new Word("harry"), new Word("harsh"), new Word("haste"), new Word("hasty"), new Word("hatch"), new Word("hater"), new Word("haunt"), new Word("haute"), new Word("haven"), new Word("havoc"), new Word("hazel"), new Word("heady"), new Word("heard"), new Word("heart"), new Word("heath"), new Word("heave"), new Word("heavy"), new Word("hedge"), new Word("hefty"), new Word("heist"), new Word("helix"), new Word("hello"), new Word("hence"), new Word("heron"), new Word("hilly"), new Word("hinge"), new Word("hippo"), new Word("hippy"), new Word("hitch"), new Word("hoard"), new Word("hobby"), new Word("hoist"), new Word("holly"), new Word("homer"), new Word("honey"), new Word("honor"), new Word("horde"), new Word("horny"), new Word("horse"), new Word("hotel"), new Word("hotly"), new Word("hound"), new Word("house"), new Word("hovel"), new Word("hover"), new Word("howdy"), new Word("human"), new Word("humid"), new Word("humor"), new Word("humph"), new Word("humus"), new Word("hunch"), new Word("hunky"), new Word("hurry"), new Word("husky"), new Word("hussy"), new Word("hutch"), new Word("hydro"), new Word("hyena"), new Word("hymen"), new Word("hyper"));
wordsArray.push(//I                                         
new Word("icily"), new Word("icing"), new Word("ideal"), new Word("idiom"), new Word("idiot"), new Word("idler"), new Word("idyll"), new Word("igloo"), new Word("iliac"), new Word("image"), new Word("imbue"), new Word("impel"), new Word("imply"), new Word("inane"), new Word("inbox"), new Word("incur"), new Word("index"), new Word("inept"), new Word("inert"), new Word("infer"), new Word("ingot"), new Word("inlay"), new Word("inlet"), new Word("inner"), new Word("input"), new Word("inter"), new Word("intro"), new Word("ionic"), new Word("irate"), new Word("irony"), new Word("islet"), new Word("issue"), new Word("itchy"), new Word("ivory"));
wordsArray.push(//J                                         
new Word("jaunt"), new Word("jazzy"), new Word("jelly"), new Word("jerky"), new Word("jetty"), new Word("jewel"), new Word("jiffy"), new Word("joint"), new Word("joist"), new Word("joker"), new Word("jolly"), new Word("joust"), new Word("judge"), new Word("juice"), new Word("juicy"), new Word("jumbo"), new Word("jumpy"), new Word("junta"), new Word("junto"), new Word("juror"));
wordsArray.push(//L                                         
new Word("kappa"), new Word("karma"), new Word("kayak"), new Word("kebab"), new Word("khaki"), new Word("kinky"), new Word("kiosk"), new Word("kitty"), new Word("knack"), new Word("knave"), new Word("knead"), new Word("kneed"), new Word("kneel"), new Word("knelt"), new Word("knife"), new Word("knock"), new Word("knoll"), new Word("known"), new Word("koala"), new Word("krill"));
wordsArray.push(//L                                         
new Word("label"), new Word("labor"), new Word("laden"), new Word("ladle"), new Word("lager"), new Word("lance"), new Word("lanky"), new Word("lapel"), new Word("lapse"), new Word("large"), new Word("larva"), new Word("lasso"), new Word("latch"), new Word("later"), new Word("lathe"), new Word("latte"), new Word("laugh"), new Word("layer"), new Word("leach"), new Word("leafy"), new Word("leaky"), new Word("leant"), new Word("leapt"), new Word("learn"), new Word("lease"), new Word("leash"), new Word("least"), new Word("leave"), new Word("ledge"), new Word("leech"), new Word("leery"), new Word("lefty"), new Word("legal"), new Word("leggy"), new Word("lemon"), new Word("lemur"), new Word("leper"), new Word("level"), new Word("lever"), new Word("libel"), new Word("liege"), new Word("light"), new Word("liken"), new Word("lilac"), new Word("limbo"), new Word("limit"), new Word("linen"), new Word("liner"), new Word("lingo"), new Word("lipid"), new Word("lithe"), new Word("liver"), new Word("livid"), new Word("llama"), new Word("loamy"), new Word("loath"), new Word("lobby"), new Word("local"), new Word("locus"), new Word("lodge"), new Word("lofty"), new Word("logic"), new Word("login"), new Word("loopy"), new Word("loose"), new Word("lorry"), new Word("loser"), new Word("louse"), new Word("lousy"), new Word("lover"), new Word("lower"), new Word("lowly"), new Word("loyal"), new Word("lucid"), new Word("lucky"), new Word("lumen"), new Word("lumpy"), new Word("lunar"), new Word("lunch"), new Word("lunge"), new Word("lupus"), new Word("lurch"), new Word("lurid"), new Word("lusty"), new Word("lying"), new Word("lymph"), new Word("lyric"));
wordsArray.push(//M                                         
new Word("macaw"), new Word("macho"), new Word("macro"), new Word("madam"), new Word("madly"), new Word("mafia"), new Word("magic"), new Word("magma"), new Word("maize"), new Word("major"), new Word("maker"), new Word("mambo"), new Word("mamma"), new Word("mammy"), new Word("manga"), new Word("mange"), new Word("mango"), new Word("mangy"), new Word("mania"), new Word("manic"), new Word("manly"), new Word("manor"), new Word("maple"), new Word("march"), new Word("marry"), new Word("marsh"), new Word("mason"), new Word("masse"), new Word("match"), new Word("matey"), new Word("mauve"), new Word("maxim"), new Word("maybe"), new Word("mayor"), new Word("mealy"), new Word("meant"), new Word("meaty"), new Word("mecca"), new Word("medal"), new Word("media"), new Word("medic"), new Word("melee"), new Word("melon"), new Word("mercy"), new Word("merge"), new Word("merit"), new Word("merry"), new Word("metal"), new Word("meter"), new Word("metro"), new Word("micro"), new Word("midge"), new Word("midst"), new Word("might"), new Word("milky"), new Word("mimic"), new Word("mince"), new Word("miner"), new Word("minim"), new Word("minor"), new Word("minty"), new Word("minus"), new Word("mirth"), new Word("miser"), new Word("missy"), new Word("mocha"), new Word("modal"), new Word("model"), new Word("modem"), new Word("mogul"), new Word("moist"), new Word("molar"), new Word("moldy"), new Word("money"), new Word("month"), new Word("moody"), new Word("moose"), new Word("moral"), new Word("moron"), new Word("morph"), new Word("mossy"), new Word("motel"), new Word("motif"), new Word("motor"), new Word("motto"), new Word("moult"), new Word("mound"), new Word("mount"), new Word("mourn"), new Word("mouse"), new Word("mouth"), new Word("mover"), new Word("movie"), new Word("mower"), new Word("mucky"), new Word("mucus"), new Word("muddy"), new Word("mulch"), new Word("mummy"), new Word("munch"), new Word("mural"), new Word("murky"), new Word("mushy"), new Word("music"), new Word("musky"), new Word("musty"), new Word("myrrh"));
wordsArray.push(//N                                         
new Word("nadir"), new Word("naive"), new Word("nanny"), new Word("nasal"), new Word("nasty"), new Word("natal"), new Word("naval"), new Word("navel"), new Word("needy"), new Word("neigh"), new Word("nerdy"), new Word("nerve"), new Word("never"), new Word("newer"), new Word("newly"), new Word("nicer"), new Word("niche"), new Word("niece"), new Word("night"), new Word("ninja"), new Word("ninny"), new Word("ninth"), new Word("noble"), new Word("nobly"), new Word("noise"), new Word("noisy"), new Word("nomad"), new Word("noose"), new Word("north"), new Word("nosey"), new Word("notch"), new Word("novel"), new Word("nudge"), new Word("nurse"), new Word("nutty"), new Word("nylon"), new Word("nymph"));
wordsArray.push(//O                                         
new Word("oaken"), new Word("obese"), new Word("occur"), new Word("ocean"), new Word("octal"), new Word("octet"), new Word("odder"), new Word("oddly"), new Word("offal"), new Word("offer"), new Word("often"), new Word("olden"), new Word("older"), new Word("olive"), new Word("ombre"), new Word("omega"), new Word("onion"), new Word("onset"), new Word("opera"), new Word("opine"), new Word("opium"), new Word("optic"), new Word("orbit"), new Word("order"), new Word("organ"), new Word("other"), new Word("otter"), new Word("ought"), new Word("ounce"), new Word("outdo"), new Word("outer"), new Word("outgo"), new Word("ovary"), new Word("ovate"), new Word("overt"), new Word("ovine"), new Word("ovoid"), new Word("owing"), new Word("owner"), new Word("oxide"), new Word("ozone"));
// wordsArray.push( //P                                         
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// new Word("_____"),
// ) 
// paddy pagan paint paler palsy panel panic pansy papal paper parer parka parry parse party pasta paste pasty patch patio patsy patty pause payee payer peace peach pearl pecan pedal penal pence penne penny perch peril perky pesky pesto petal petty phase phone phony photo piano picky piece piety piggy pilot pinch piney pinky pinto piper pique pitch pithy pivot pixel pixie pizza place plaid plain plait plane plank plant plate plaza plead pleat plied plier pluck plumb plume plump plunk plush poesy point poise poker polar polka polyp pooch poppy porch poser posit posse pouch pound pouty power prank prawn preen press price prick pride pried prime primo print prior prism privy prize probe prone prong proof prose proud prove prowl proxy prude prune psalm pubic pudgy puffy pulpy pulse punch pupil puppy puree purer purge purse pushy putty pygmy
