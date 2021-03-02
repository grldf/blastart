import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as add_location, j as attr_dev, m as insert_dev, n as append_dev, p as noop } from './client.28cbd2b5.js';

/* src/routes/Shop/index.svelte generated by Svelte v3.32.3 */

const file = "src/routes/Shop/index.svelte";

function create_fragment(ctx) {
	let title;
	let t0;
	let t1;
	let link;
	let t2;
	let h1;
	let t3;
	let t4;
	let button0;
	let t5;
	let t6;
	let h20;
	let t7;
	let t8;
	let img0;
	let img0_src_value;
	let t9;
	let p0;
	let t10;
	let t11;
	let button1;
	let t12;
	let t13;
	let hr;
	let t14;
	let h21;
	let t15;
	let t16;
	let img1;
	let img1_src_value;
	let t17;
	let p1;
	let t18;
	let t19;
	let button2;
	let t20;
	let t21;
	let h22;
	let t22;
	let t23;
	let img2;
	let img2_src_value;
	let t24;
	let p2;
	let t25;
	let t26;
	let button3;
	let t27;
	let t28;
	let br;

	const block = {
		c: function create() {
			title = element("title");
			t0 = text("My E-Book Shop");
			t1 = space();
			link = element("link");
			t2 = space();
			h1 = element("h1");
			t3 = text("My E-Book Shop");
			t4 = space();
			button0 = element("button");
			t5 = text("Click here to checkout");
			t6 = space();
			h20 = element("h2");
			t7 = text("Learn Tech 1");
			t8 = space();
			img0 = element("img");
			t9 = space();
			p0 = element("p");
			t10 = text("$19.99");
			t11 = space();
			button1 = element("button");
			t12 = text("Add to cart");
			t13 = space();
			hr = element("hr");
			t14 = space();
			h21 = element("h2");
			t15 = text("Learn Tech 2");
			t16 = space();
			img1 = element("img");
			t17 = space();
			p1 = element("p");
			t18 = text("$29.99");
			t19 = space();
			button2 = element("button");
			t20 = text("Add to cart");
			t21 = space();
			h22 = element("h2");
			t22 = text("Learn Tech 3");
			t23 = space();
			img2 = element("img");
			t24 = space();
			p2 = element("p");
			t25 = text("$39.99");
			t26 = space();
			button3 = element("button");
			t27 = text("Add to cart");
			t28 = space();
			br = element("br");
			this.h();
		},
		l: function claim(nodes) {
			title = claim_element(nodes, "TITLE", {});
			var title_nodes = children(title);
			t0 = claim_text(title_nodes, "My E-Book Shop");
			title_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			link = claim_element(nodes, "LINK", { rel: true, href: true });
			t2 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "My E-Book Shop");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			button0 = claim_element(nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Click here to checkout");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", {});
			var h20_nodes = children(h20);
			t7 = claim_text(h20_nodes, "Learn Tech 1");
			h20_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			img0 = claim_element(nodes, "IMG", { src: true });
			t9 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t10 = claim_text(p0_nodes, "$19.99");
			p0_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);

			button1 = claim_element(nodes, "BUTTON", {
				class: true,
				"data-item-id": true,
				"data-item-price": true,
				"data-item-url": true,
				"data-item-image": true,
				"data-item-name": true
			});

			var button1_nodes = children(button1);
			t12 = claim_text(button1_nodes, "Add to cart");
			button1_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t14 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", {});
			var h21_nodes = children(h21);
			t15 = claim_text(h21_nodes, "Learn Tech 2");
			h21_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			img1 = claim_element(nodes, "IMG", { src: true });
			t17 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t18 = claim_text(p1_nodes, "$29.99");
			p1_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);

			button2 = claim_element(nodes, "BUTTON", {
				class: true,
				"data-item-id": true,
				"data-item-price": true,
				"data-item-url": true,
				"data-item-image": true,
				"data-item-name": true
			});

			var button2_nodes = children(button2);
			t20 = claim_text(button2_nodes, "Add to cart");
			button2_nodes.forEach(detach_dev);
			t21 = claim_space(nodes);
			h22 = claim_element(nodes, "H2", {});
			var h22_nodes = children(h22);
			t22 = claim_text(h22_nodes, "Learn Tech 3");
			h22_nodes.forEach(detach_dev);
			t23 = claim_space(nodes);
			img2 = claim_element(nodes, "IMG", { src: true });
			t24 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t25 = claim_text(p2_nodes, "$39.99");
			p2_nodes.forEach(detach_dev);
			t26 = claim_space(nodes);

			button3 = claim_element(nodes, "BUTTON", {
				class: true,
				"data-item-id": true,
				"data-item-price": true,
				"data-item-url": true,
				"data-item-image": true,
				"data-item-name": true
			});

			var button3_nodes = children(button3);
			t27 = claim_text(button3_nodes, "Add to cart");
			button3_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);

			br = claim_element(nodes, "BR", {
				hidden: true,
				id: true,
				"data-api-key": true
			});

			this.h();
		},
		h: function hydrate() {
			add_location(title, file, 0, 0, 0);
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css");
			add_location(link, file, 1, 0, 30);
			add_location(h1, file, 6, 0, 129);
			attr_dev(button0, "class", "snipcart-checkout");
			add_location(button0, file, 8, 0, 154);
			add_location(h20, file, 10, 0, 221);
			if (img0.src !== (img0_src_value = "https://placeimg.com/200/300/tech")) attr_dev(img0, "src", img0_src_value);
			add_location(img0, file, 11, 0, 243);
			add_location(p0, file, 12, 0, 291);
			attr_dev(button1, "class", "snipcart-add-item");
			attr_dev(button1, "data-item-id", "learn-tech-1");
			attr_dev(button1, "data-item-price", "19.99");
			attr_dev(button1, "data-item-url", "/");
			attr_dev(button1, "data-item-image", "https://placeimg.com/200/300/tech");
			attr_dev(button1, "data-item-name", "Learn Tech 1");
			add_location(button1, file, 13, 0, 305);
			add_location(hr, file, 24, 0, 530);
			add_location(h21, file, 26, 0, 538);
			if (img1.src !== (img1_src_value = "https://placeimg.com/200/300/arch")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file, 27, 0, 560);
			add_location(p1, file, 28, 0, 608);
			attr_dev(button2, "class", "snipcart-add-item");
			attr_dev(button2, "data-item-id", "learn-tech-2");
			attr_dev(button2, "data-item-price", "29.99");
			attr_dev(button2, "data-item-url", "/");
			attr_dev(button2, "data-item-image", "https://placeimg.com/200/300/arch");
			attr_dev(button2, "data-item-name", "Learn Tech 2");
			add_location(button2, file, 29, 0, 622);
			add_location(h22, file, 40, 0, 847);
			if (img2.src !== (img2_src_value = "https://placeimg.com/200/300/people")) attr_dev(img2, "src", img2_src_value);
			add_location(img2, file, 41, 0, 869);
			add_location(p2, file, 42, 0, 919);
			attr_dev(button3, "class", "snipcart-add-item");
			attr_dev(button3, "data-item-id", "learn-tech-3");
			attr_dev(button3, "data-item-price", "39.99");
			attr_dev(button3, "data-item-url", "/");
			attr_dev(button3, "data-item-image", "https://placeimg.com/200/300/people");
			attr_dev(button3, "data-item-name", "Learn Tech 3");
			add_location(button3, file, 43, 0, 933);
			br.hidden = true;
			attr_dev(br, "id", "snipcart");
			attr_dev(br, "data-api-key", "<API_KEY>");
			add_location(br, file, 54, 0, 1160);
		},
		m: function mount(target, anchor) {
			insert_dev(target, title, anchor);
			append_dev(title, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, link, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, img0, anchor);
			insert_dev(target, t9, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, hr, anchor);
			insert_dev(target, t14, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t15);
			insert_dev(target, t16, anchor);
			insert_dev(target, img1, anchor);
			insert_dev(target, t17, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, button2, anchor);
			append_dev(button2, t20);
			insert_dev(target, t21, anchor);
			insert_dev(target, h22, anchor);
			append_dev(h22, t22);
			insert_dev(target, t23, anchor);
			insert_dev(target, img2, anchor);
			insert_dev(target, t24, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t25);
			insert_dev(target, t26, anchor);
			insert_dev(target, button3, anchor);
			append_dev(button3, t27);
			insert_dev(target, t28, anchor);
			insert_dev(target, br, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(title);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(link);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(img0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(h21);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(img1);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(button2);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(h22);
			if (detaching) detach_dev(t23);
			if (detaching) detach_dev(img2);
			if (detaching) detach_dev(t24);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t26);
			if (detaching) detach_dev(button3);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(br);
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
	validate_slots("Shop", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Shop> was created with unknown prop '${key}'`);
	});

	return [];
}

class Shop extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Shop",
			options,
			id: create_fragment.name
		});
	}
}

export default Shop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTEwYThiZmEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=