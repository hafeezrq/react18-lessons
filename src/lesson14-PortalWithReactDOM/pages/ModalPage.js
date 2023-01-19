import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../../lesson10-buttons/components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClosingModal = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClosing={handleClosingModal}
      actionBar={
        <Button primary onClick={handleClosingModal}>
          Accept
        </Button>
      }>
      <p>Please click on the Accept button to complete the process</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vitae
        omnis aliquid, numquam quam corrupti harum iste alias commodi sed
        aperiam animi repellat. Recusandae natus sit rem dicta sequi quod
        cumque, consequatur voluptate illo alias dolor explicabo consectetur
        eaque exercitationem impedit, id harum dolores quisquam tempore
        molestiae minus. Nam fuga deleniti eligendi rem tempora aliquam nobis,
        sint tempore veritatis illo ipsa labore cum nesciunt maiores voluptate.
        Temporibus sequi, odit dolore quaerat rerum minus porro neque illo nobis
        beatae excepturi suscipit incidunt perspiciatis, dignissimos distinctio
        unde, nesciunt laudantium id repudiandae ex officia soluta eaque
        reiciendis. Fugit sed harum eligendi ipsum, cumque doloremque, ea
        eveniet quae, labore facilis nulla commodi cupiditate molestias! Velit
        aut ducimus incidunt magnam similique architecto sunt, deserunt, earum
        officiis expedita obcaecati, veniam quas ipsam. Nobis rerum quaerat
        nesciunt! Ipsa inventore quo dolorum ea error, quas aspernatur quis,
        distinctio, debitis perspiciatis dolor molestiae dolorem. Voluptatem
        expedita suscipit amet tempore officia? Distinctio voluptatem omnis,
        laudantium soluta, blanditiis quod recusandae doloremque dolor adipisci,
        rerum voluptatibus quibusdam itaque nisi eos. Dolorum vel veniam in
        quaerat illum accusamus quia nam commodi quo aspernatur harum nesciunt
        quibusdam magni, soluta voluptas! Ea autem incidunt deserunt vel
        reprehenderit. Ea mollitia consequatur esse voluptatem nemo
        voluptatibus, voluptatum nesciunt ipsa vel. Similique, beatae
        perferendis voluptatem, illum natus asperiores assumenda ipsa ea, a eos
        soluta et quisquam ducimus. A magnam error natus obcaecati possimus
        maxime reprehenderit nemo modi. Vitae ratione, illo deleniti officiis
        fugit sapiente ex ab reprehenderit cum, necessitatibus numquam deserunt
        nisi voluptates laboriosam, dignissimos dolore quisquam enim accusamus
        id quo commodi quae recusandae laborum accusantium. Eveniet inventore
        dolores distinctio! Excepturi voluptatibus facere provident fuga alias
        velit at, atque quibusdam molestiae recusandae! Ipsum doloribus tenetur
        corporis repudiandae quos ullam saepe, dolorem magni aliquid dignissimos
        iure nostrum cum facere eveniet facilis, illum sit nemo perspiciatis
        aut. Eius, voluptatibus placeat in delectus sit facere deleniti
        doloribus asperiores amet neque fuga perferendis officiis corrupti iusto
        culpa ipsam ratione error fugit, labore tempore dignissimos dolore
        aperiam! Vel illo soluta delectus cumque ea, dignissimos id atque dicta
        repudiandae autem magnam doloribus suscipit dolorum aperiam molestias
        architecto corrupti molestiae sapiente iure libero, reiciendis aliquid
        sunt! Modi architecto harum, illo, omnis totam recusandae nihil quis
        fuga repellat ipsa velit exercitationem sed rerum officia facilis atque.
        Sunt ullam fugit soluta expedita molestias est delectus incidunt
        quibusdam quos ipsa voluptatem facilis laudantium commodi tenetur velit,
        enim quae cumque numquam. Porro minus dolorem aliquid neque quisquam?
        Atque recusandae temporibus veritatis incidunt aut cumque impedit,
        eligendi unde facere commodi. Beatae, reprehenderit dicta! Ea laboriosam
        est iure sed, atque alias incidunt facilis similique velit iste vero
        odio! Minus, esse praesentium quidem unde ipsa ducimus quas quos
        repellat quod dolor laudantium sed sint explicabo dignissimos laborum
        placeat autem? Corporis rem debitis modi saepe reiciendis facilis in
        maiores veritatis vero sequi perferendis, hic magnam sit, consectetur
        alias? Commodi eos voluptatum, rem, repudiandae fuga quam dolor
        aspernatur eaque error incidunt harum expedita quisquam itaque,
        dignissimos ratione cumque officiis impedit vero voluptas necessitatibus
        cupiditate. At fuga atque aperiam maiores nesciunt possimus, culpa
        dolorum quisquam ullam quasi, unde repellat dolore ipsa amet dolor
        temporibus quae, voluptatibus porro nulla eum iste illum adipisci
        aliquam sit. Rerum nobis architecto, illum ex excepturi, rem possimus
        iste provident fugit obcaecati deleniti, eligendi recusandae atque!
        Provident ipsum fugit, excepturi perspiciatis assumenda soluta doloribus
        beatae harum eaque sunt, id inventore possimus! Quaerat repudiandae
        molestiae nobis ut minima accusamus dolor eligendi unde tempore optio
        nisi nostrum pariatur obcaecati eveniet debitis itaque quam ea corporis
        eius a ipsum, error dolores sit? Voluptatem dolorum doloremque,
        praesentium omnis culpa aperiam esse consectetur natus vero temporibus,
        hic excepturi quidem amet dolores et. Expedita quas exercitationem at
        impedit explicabo iure tempora nesciunt laudantium pariatur, laboriosam
        mollitia repellat ducimus deserunt perferendis non, corrupti
        necessitatibus officiis sed? Accusantium nesciunt debitis ipsum sint,
        deleniti inventore quis porro voluptatem eos ratione, explicabo
        doloremque cum a sit optio sed aliquam! Corporis unde hic quo velit
        dolorum, nemo quaerat sit enim itaque atque vel sed quas mollitia
        reiciendis doloremque ab quis. Labore, quam facere doloribus provident
        eos soluta amet quo at rerum corrupti, cumque, natus repellat sequi
        saepe vero ex aut magni. Nemo dolor quae alias voluptates obcaecati at
        sit ratione velit! Quibusdam vel quos, hic magnam, ad explicabo harum
        adipisci omnis sunt sit odit exercitationem veniam at nisi nobis. Modi
        consectetur incidunt cupiditate, vitae sint deleniti? Ea debitis nostrum
        rerum laborum porro, nam, rem similique maxime commodi quasi officiis
        earum vero doloribus. Atque vero dolorum eius unde eaque, porro numquam
        quaerat perspiciatis dolorem culpa nobis deserunt itaque reiciendis
        repudiandae, provident iusto sit illum soluta corporis voluptate!
        Repudiandae expedita repellat tenetur facere accusantium a sunt
        perferendis aut officia eaque. Necessitatibus, voluptas temporibus eum
        voluptates cum nisi dolorem saepe est ipsa explicabo consectetur minus
        provident neque sequi consequuntur, delectus doloremque molestiae
        commodi. Pariatur a similique magni. Non obcaecati, vero alias molestias
        sint commodi cupiditate eos voluptatem accusamus officiis aperiam quia
        aliquid eveniet porro doloremque maxime. Excepturi magnam porro omnis
        dignissimos pariatur consequuntur, numquam autem, voluptates enim
        deserunt hic ex odit. Nam harum, officiis, eum fugit iure at quaerat
        iste, exercitationem aut error commodi corrupti dolor! Provident ratione
        placeat accusantium repellat exercitationem reiciendis vel ipsum optio
        quo? Aperiam dicta magni ipsa non suscipit exercitationem! In molestias
        nemo impedit ab aspernatur, nihil ipsam qui non perspiciatis fugit
        maiores, sed, quia iusto. Obcaecati neque, quia provident aspernatur
        esse cupiditate beatae quod harum corporis voluptate! Eos aspernatur
        accusantium molestiae fuga ratione tenetur totam, praesentium tempora
        odio quo, unde asperiores enim commodi qui quis eius, eaque hic?
        Distinctio rem dicta earum, voluptate laboriosam sapiente! Similique
        quae accusamus maiores, quaerat, sunt culpa iure, aspernatur reiciendis
        sapiente inventore fugit earum aperiam necessitatibus voluptate ducimus
        illo id ipsam sed. Adipisci labore numquam dicta architecto
        necessitatibus dolores? Ut tempore id pariatur culpa rerum suscipit,
        debitis velit quia saepe sunt. Quae dolore quis tempora ipsam doloremque
        ex asperiores, pariatur ratione possimus vel. Magnam, excepturi
        voluptas! Quos tenetur quas nesciunt optio voluptatum perspiciatis eius
        distinctio quasi iste ad quisquam dolorem nisi, officiis deleniti unde
        quam vero suscipit earum deserunt, cumque atque saepe. At cum,
        recusandae voluptate a nesciunt autem eveniet! Placeat reprehenderit
        culpa doloremque voluptas quasi, consequatur asperiores repudiandae
        autem, molestias sunt laborum impedit expedita alias veritatis incidunt
        hic commodi, repellat rem illo aut? Consequatur maxime temporibus esse
        deleniti ipsa iste, non enim! Incidunt aperiam accusantium et fugit
        architecto possimus ipsam quasi vero, quo autem nesciunt temporibus
        numquam obcaecati dolorem soluta expedita nulla optio? Atque dolorem
        doloremque sint similique, officiis debitis. Minima ea cupiditate quas
        dolorem officia voluptas maiores, sed necessitatibus nihil illo at
        rerum, ad culpa. Earum mollitia officiis explicabo iusto qui architecto
        cum quasi dolores eaque suscipit. Sapiente, veniam consectetur
        laudantium in maiores error cumque harum quam debitis? Ipsam nam in
        pariatur! Quae veritatis quam perspiciatis reprehenderit, ullam,
        officiis quaerat minus nemo sit optio commodi eum laboriosam, mollitia
        assumenda quasi. Dolor recusandae dolore repellendus odio dignissimos
        beatae ipsa quae consequatur eum, maxime tenetur iste aliquam
        exercitationem suscipit in illo possimus laborum obcaecati quidem
        adipisci asperiores. Voluptas velit suscipit numquam incidunt vero
        similique, sint nihil beatae temporibus. Temporibus laborum earum sunt
        odit, totam illum alias qui sit, debitis eos veniam aliquam corporis nam
        maiores ratione, obcaecati dolore veritatis at facere blanditiis quis?
        Veritatis debitis rem illo atque consectetur, modi temporibus, sint,
        assumenda quidem molestiae tenetur asperiores sit voluptates iste est
        voluptatem nihil minus fugiat sunt! Doloribus dolorem culpa non
        quibusdam accusamus vero iusto temporibus ad ipsa aspernatur deleniti
        tenetur, rem quas eveniet illo error odio. Blanditiis sed inventore
        itaque atque totam aliquid doloremque excepturi tenetur veniam possimus,
        commodi placeat. Cum, omnis? Corporis neque illo consectetur natus! Eum
        alias consequuntur vitae repudiandae cum voluptatum id quidem
        voluptatibus placeat, error repellat? Provident aperiam, laborum iure
        magni fuga reiciendis numquam sunt nobis harum nulla ipsum officia
        laudantium praesentium, excepturi eum tempora quidem quam porro ad
        tenetur labore consectetur eveniet perferendis. Quisquam atque,
        quibusdam quia commodi possimus sunt quasi dignissimos nam soluta
        molestias eveniet ipsum, mollitia quaerat vitae voluptates, aspernatur
        architecto nobis maxime voluptatem ratione ipsam! Voluptatibus ad, nihil
        obcaecati nam consequatur illum officia necessitatibus eum quaerat
        delectus quos, minima labore sint mollitia tenetur ab soluta repellendus
        inventore autem provident? Vero, dolor doloremque incidunt labore
        molestias doloribus sequi consequuntur nobis. Dolores et minima
        veritatis atque in consectetur qui quis vitae saepe inventore expedita
        similique magnam, mollitia culpa eligendi ducimus vel voluptatibus
        facilis? Nam quibusdam inventore sequi, deleniti ex beatae magnam eius
        ea placeat praesentium corporis eveniet ullam possimus quae iste tempore
        quas, deserunt facilis voluptatem veniam dolorem. Quia laborum quas vel
        omnis molestiae modi tenetur, ad tempora eius vero natus ipsa quasi,
        officiis repellat dolor! Voluptate aliquid quaerat quisquam doloremque
        facilis nobis, expedita tempora quidem, hic nisi eveniet dolores nostrum
        repudiandae sit distinctio tempore, ullam officiis error! Mollitia
        quisquam illum, vero reprehenderit natus doloribus perspiciatis illo
        blanditiis nisi, obcaecati labore error nihil perferendis itaque sint
        atque veniam? Eos quas vero, natus voluptatem at dignissimos nemo
        facere. Corporis, quis? Laboriosam tempora natus explicabo a asperiores
        hic placeat accusantium quidem? Eos ipsa autem aliquid et commodi dicta
        laudantium quidem illum officia eveniet veniam vel veritatis error,
        facere recusandae numquam perspiciatis sunt! Quis minus voluptate
        numquam beatae libero provident nobis quidem harum modi dolor, error
        saepe dolores, qui aliquam sit? Laboriosam esse eveniet deserunt
        consequatur! Nobis amet iure beatae laborum natus dolore cumque quidem
        placeat neque eveniet ratione, ex vel. Odio eum officia perspiciatis
        cupiditate modi quod deserunt minima facere et, consectetur beatae
        suscipit omnis, nulla obcaecati? Fugiat est excepturi, placeat,
        assumenda itaque id doloribus sequi hic autem qui fuga corporis aperiam
        nulla minima ipsam facilis adipisci! Eveniet tempora ut ipsum voluptas
        repellendus nobis quia. Reprehenderit libero labore aperiam obcaecati
        dolorum enim sint natus quidem nobis ducimus perspiciatis, placeat
        assumenda quos iste voluptate fugit dolorem doloremque quae qui
        molestiae. Accusantium deleniti optio beatae aliquam hic ad aliquid
        repellendus culpa fugit, placeat, inventore recusandae eveniet dolore
        repellat, cumque ipsam assumenda explicabo doloremque error aspernatur
        quidem nostrum sunt illo. Asperiores rerum facere earum porro commodi
        unde voluptates incidunt ducimus magnam sapiente consectetur, quae est
        esse. Totam accusamus hic nostrum accusantium reprehenderit, molestias
        exercitationem voluptate? Eveniet, sunt repellendus? Quas dolorum neque
        veniam quaerat quia laudantium reiciendis, cumque fugiat, nostrum
        laboriosam officia accusantium consectetur corporis saepe maxime,
        repellendus similique quos ut dolores quae accusamus! Voluptatem harum
        ad asperiores magnam expedita beatae corporis quasi similique amet quas?
        Nostrum similique veritatis dolores fugiat quia ratione deleniti
        accusamus fugit iusto amet! Cupiditate et ipsum facilis numquam eum nisi
        ex illum quae quo eos rem ad animi repellendus quod accusantium veniam
        minima perferendis, nulla nobis tempora dolores. Placeat est debitis sit
        officiis quam porro eveniet pariatur, cum recusandae harum doloremque
        quos odio molestiae veritatis aspernatur quia voluptatibus,
        reprehenderit explicabo a nostrum deleniti vitae sint animi voluptate?
        Eius voluptas deleniti explicabo perspiciatis illo animi placeat ad
        reiciendis nam praesentium obcaecati, eum vel! Repellendus deserunt
        consequatur nulla adipisci, sunt, nisi aliquid odit beatae, quas
        inventore sit fuga ea provident natus aperiam quasi dolore cumque
        placeat hic? Ratione sapiente doloribus aspernatur quasi doloremque
        corrupti nostrum distinctio adipisci aliquid incidunt alias velit
        veniam, illum provident sed voluptatem sunt enim quis architecto amet et
        praesentium. Culpa ut fugiat commodi odit impedit saepe expedita
        pariatur mollitia, facere quibusdam deleniti praesentium. Odio porro
        molestias quisquam architecto, inventore eaque expedita placeat quas
        mollitia laborum dolores temporibus earum modi adipisci distinctio,
        blanditiis eveniet iusto? Magnam veritatis mollitia perferendis fugiat
        id, architecto placeat veniam blanditiis at quibusdam consequatur labore
        aut, iusto, ipsa repudiandae et vero nesciunt natus qui libero sequi?
        Explicabo suscipit quaerat eos unde laudantium voluptatum quis at
        ducimus officiis, rem earum delectus aut enim sint nesciunt provident
        modi hic architecto. Sunt libero pariatur quibusdam iste id veniam ea
        laudantium, unde tempore, debitis exercitationem blanditiis aperiam
        nobis! Ab, ratione atque! Doloremque sapiente rem nisi molestias
        debitis, ab quia. Obcaecati quam, delectus repellendus aliquid culpa
        excepturi iure, aut dolore eum fugit porro. Aliquam exercitationem iure
        rerum, voluptatem maiores sit tempore omnis eligendi, enim, autem at
        totam unde sequi iste sunt ullam? Quo magnam nihil minima voluptate
        laudantium ex eligendi labore provident ea optio veritatis enim
        accusamus omnis ratione blanditiis libero ab laboriosam adipisci dolores
        fugit dolorem, odio asperiores. Veniam facilis veritatis a ea alias
        delectus illo iusto expedita quis cumque tenetur esse reprehenderit
        dicta aspernatur asperiores, dolor quos. Et, iste? A iure dolorem saepe
        tenetur natus modi minima harum aliquam eligendi in ea similique earum,
        totam ex odit consequuntur, voluptatibus optio placeat maiores et
        nesciunt enim voluptate! Omnis, esse vero voluptatibus, odit, autem hic
        voluptate reiciendis nesciunt magnam ducimus dolores nulla atque soluta
        quaerat temporibus blanditiis. Repellat, eum praesentium error expedita
        nemo iusto itaque consequatur omnis magni sapiente harum voluptates nam
        earum tempora. Doloremque aliquam repellendus odit sunt blanditiis
        explicabo nihil reiciendis quae delectus harum quidem vero
        exercitationem, nam iusto obcaecati, excepturi laudantium eveniet
        molestiae facere molestias? Nam, eum molestiae. In magni repudiandae
        incidunt eius quasi corrupti qui nihil quibusdam, neque itaque possimus
        unde amet voluptatum saepe? Ipsum non vel rem fuga odio aut, nobis nihil
        id consequatur ipsam earum distinctio quidem, eum sit vero sapiente
        laboriosam aliquid fugiat aperiam quam explicabo mollitia consectetur
        necessitatibus porro. Quaerat veniam placeat nihil molestiae tempore
        aperiam dolor mollitia, eligendi dolorum. Assumenda temporibus harum,
        alias sunt aliquid laborum voluptatum quisquam exercitationem ipsa
        cumque vitae, nulla voluptatibus commodi et, nesciunt quam! Sequi
        excepturi ea eveniet laudantium eius saepe fugiat necessitatibus fugit,
        ipsam dolore explicabo quas pariatur alias, id atque asperiores
        voluptatum nostrum voluptatibus sint commodi esse provident! Animi magni
        dolores unde asperiores quisquam voluptas ea in dolore. Expedita autem
        asperiores excepturi eligendi sint mollitia eaque quibusdam maxime
        minima esse. Tempore minima ea ad nam doloremque impedit cupiditate
        aperiam laudantium. Libero inventore similique eligendi autem accusamus
        assumenda, quo, optio ipsum velit dicta, modi eaque fugiat esse
        doloremque ducimus atque consequuntur maiores possimus accusantium
        voluptate. Repudiandae laudantium atque eius in doloremque neque iste
        voluptas nostrum saepe corporis. Nostrum porro quam deleniti sapiente?
        Fuga sapiente odit quam, ad neque eos dolore molestiae, soluta eveniet,
        corrupti dolores. Labore, quidem reiciendis nemo recusandae harum illo.
        Nisi, asperiores atque molestiae numquam aperiam et sapiente non
        excepturi aliquam earum fugiat reprehenderit? Aut quae repellat sapiente
        labore quidem atque obcaecati nulla totam eligendi. Voluptatibus sunt
        ullam deserunt distinctio, quam cumque fugiat quod placeat eum voluptate
        totam libero, numquam debitis excepturi possimus saepe magni officiis
        temporibus nisi perferendis consequuntur nostrum sit nam. Dolores
        mollitia iste harum est eius voluptatum, accusamus voluptates assumenda?
        Hic ratione nisi, cupiditate unde impedit dolorem sint sunt. Illum nemo
        laudantium rerum. Blanditiis neque alias tempore autem, molestias at ab
        reprehenderit quo, vel doloremque nulla recusandae expedita eligendi
        optio a voluptatum aliquid saepe. Magnam earum, laboriosam fugiat
        maxime, tenetur voluptate, animi fugit commodi laborum est quae sed.
        Praesentium illum assumenda exercitationem nemo! Beatae similique
        officiis dolores voluptatum quae ipsam. Id quisquam ut in. Deleniti odit
        tempore repellat beatae necessitatibus laboriosam autem sed. Eum in
        cupiditate facilis iure quos! Numquam, quidem obcaecati! Soluta
        provident asperiores molestiae mollitia est aut sunt, dignissimos illo
        doloribus doloremque. Doloremque, adipisci. Facilis facere molestiae
        voluptatibus, itaque cum magni harum adipisci provident officiis sequi
        eaque dolorem corrupti sapiente repudiandae porro, nobis a distinctio
        consequatur! Cupiditate nemo minima non eligendi repellendus ea at magni
        perspiciatis repudiandae quisquam soluta blanditiis eaque facilis itaque
        illum quas autem fugiat aperiam eveniet obcaecati iste dolor, modi
        doloremque? Numquam quae eligendi adipisci ab nihil eius voluptatem eos
        nobis. Deleniti, eaque vero a hic ex voluptates rerum eveniet quae est
        dignissimos quibusdam? Accusantium a quae expedita itaque? Ea, officiis
        delectus autem, odit distinctio illo culpa error ducimus eligendi
        tenetur at neque libero magni voluptatem incidunt ut excepturi possimus
        expedita nihil consequatur repudiandae maxime quam pariatur! Quidem
        repudiandae mollitia sed fugiat aspernatur quae, laborum quibusdam
        accusantium qui necessitatibus optio, consequatur temporibus earum
        dolores sint, quasi distinctio. Cumque odio architecto non ullam optio
        praesentium dolorem? Atque quod magnam veniam nobis error possimus
        quidem ab iure odit, beatae expedita culpa totam consectetur voluptatum,
        sit quae. Earum praesentium numquam laborum error aspernatur, optio
        doloremque commodi, deserunt eligendi expedita culpa quibusdam
        voluptates, quo unde voluptatum. Unde optio animi, soluta amet ea
        deleniti atque iusto odit omnis commodi necessitatibus in architecto
        inventore illum asperiores, maxime veniam est doloremque magnam
        delectus? Quae doloremque possimus repellat sapiente, laudantium, a unde
        tempora, suscipit sit similique reiciendis id? Iusto cum totam culpa
        delectus. Minus reiciendis odit debitis. Repellat saepe qui vitae ad
        obcaecati rem, perspiciatis ullam molestias nesciunt quo magnam
        voluptates fuga? Voluptatem, cum error? Inventore consequatur quidem nam
        perferendis reprehenderit accusamus veritatis quas dolorem, odit magnam
        harum dolorum placeat fugit laborum voluptates sunt! Tempora magni illum
        id, distinctio architecto quibusdam at excepturi voluptatibus quod,
        saepe exercitationem, expedita voluptatem. Nostrum necessitatibus omnis
        exercitationem mollitia pariatur blanditiis vero magni aperiam at cum.
        Ab delectus earum voluptatibus? Temporibus hic doloribus molestiae sit
        soluta praesentium aut exercitationem iste nemo. Dicta praesentium
        veniam cupiditate. Commodi expedita voluptas facilis amet ratione
        architecto rerum ad excepturi eaque, alias debitis adipisci minus
        provident ullam corporis maiores minima quos obcaecati dolorem. Autem
        dolorem facere maxime fugiat ex architecto magni libero. Veritatis modi
        accusamus natus accusantium itaque quos repellendus deleniti, ducimus
        quia iure perspiciatis sed corporis laborum sint, ipsum cupiditate eum?
        Recusandae quidem minima sit fuga rem debitis reprehenderit nulla
        corrupti tempora laboriosam quia veniam fugit, repellendus totam
        corporis dolor aperiam atque adipisci culpa dolores perferendis. Neque
        tempore quo voluptatem odit dolorem, magni accusamus consectetur
        asperiores doloremque optio quod dolorum ut minima vitae porro debitis
        officiis! Ex nisi laborum, qui omnis voluptates dolor soluta quaerat,
        commodi nostrum non inventore. Nisi facere velit, porro delectus debitis
        nihil quam dolores magni, nemo est, ab necessitatibus accusamus animi.
        Harum veritatis officiis fuga magnam delectus cumque perferendis omnis
        illum, repellendus numquam vero officia dolorum deleniti inventore quam
        aut tempora atque nihil minima labore quod consequuntur enim velit
        animi! Nemo quos omnis magni odit delectus error minus amet sequi
        corporis saepe, at possimus quo fuga tempora necessitatibus dolore
        dolorum perspiciatis repudiandae. Laboriosam eius porro illo, minus
        itaque vitae labore, consequuntur cupiditate rem autem perferendis odit
        libero ratione officia ea. Doloribus, rem ratione eaque animi placeat
        provident eveniet quas deserunt beatae labore ex et sit quidem? Corporis
        odio voluptates laborum a accusantium suscipit ipsam iure, amet mollitia
        hic itaque exercitationem laboriosam, maiores, qui quis inventore
        repellat ipsum ab repudiandae?
      </p>
    </div>
  );
}

export default ModalPage;
