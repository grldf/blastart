import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, q as query_selector_all, c as claim_element, b as detach_dev, f as claim_space, g as attr_dev, h as add_location, j as append_dev, k as insert_dev, n as noop } from './client.56f13b7d.js';

/* src/routes/index.svelte generated by Svelte v3.35.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let meta;
	let t;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			meta = element("meta");
			t = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-184uw2b\"]", document.head);
			meta = claim_element(head_nodes, "META", { description: true });
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "description", "Toujours plus monumentale, et toujours plus accessible, c'est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques.\n\tA l' origine du projet comme l' Exposition - oeuvre in-situ Le Terminal  à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité des 3 artistes.\n\tEn mutualisant les talents d'un peintre graffeur muraliste et d'un sculpteur, L'imagination devient facilement réalité.");
			add_location(meta, file, 1, 2, 16);
			document.title = "Blastart collectif d'artistes aux multiples talenst. Kalouf grapheur\n    muraliste, Romain Lardanchet sculpteur monumental, FabeCollage photographe\n    créatif et Jean-Pierre(staffvidéo) vidéaste créatif.";
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo deco");
			attr_dev(img, "class", "svelte-jyx2mj");
			add_location(img, file, 13, 0, 749);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t, anchor);
			insert_dev(target, img, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(meta);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDc4OTBhMDIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
