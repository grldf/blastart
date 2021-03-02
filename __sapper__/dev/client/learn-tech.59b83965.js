import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, A as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, j as attr_dev, k as add_location, m as insert_dev, p as noop } from './client.098d8c2e.js';

/* src/routes/Shop/learn-tech.svelte generated by Svelte v3.32.3 */

const file = "src/routes/Shop/learn-tech.svelte";

function create_fragment(ctx) {
	let t;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			t = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1jci0zq\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			img = claim_element(nodes, "IMG", { id: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			document.title = "learn-tech";
			attr_dev(img, "id", "learn-tech");
			if (img.src !== (img_src_value = "https://placeimg.com/200/300/tech")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "test");
			add_location(img, file, 4, 4, 68);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, img, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
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
	validate_slots("Learn_tech", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Learn_tech> was created with unknown prop '${key}'`);
	});

	return [];
}

class Learn_tech extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Learn_tech",
			options,
			id: create_fragment.name
		});
	}
}

export default Learn_tech;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhcm4tdGVjaC41OWI4Mzk2NS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
