import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, l as children, m as claim_text, b as detach_dev, f as claim_space, h as add_location, g as attr_dev, k as insert_dev, j as append_dev, w as set_data_dev, n as noop, x as destroy_each } from './client.6fd9847b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/video/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/video/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (33:0) {#each videos as video}
function create_each_block(ctx) {
	let div;
	let h3;
	let t0_value = /*video*/ ctx[1].titre + "";
	let t0;
	let t1;
	let video;
	let track;
	let video_src_value;
	let video_poster_value;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			video = element("video");
			track = element("track");
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);

			video = claim_element(div_nodes, "VIDEO", {
				src: true,
				controls: true,
				poster: true,
				type: true,
				class: true
			});

			var video_nodes = children(video);
			track = claim_element(video_nodes, "TRACK", { kind: true });
			video_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 34, 4, 709);
			attr_dev(track, "kind", "captions");
			add_location(track, file, 36, 8, 846);
			if (video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) attr_dev(video, "src", video_src_value);
			video.controls = true;
			attr_dev(video, "poster", video_poster_value = urlpApi + /*video*/ ctx[1].cover.url);
			attr_dev(video, "type", "video/mp4");
			attr_dev(video, "class", "svelte-86c2or");
			add_location(video, file, 35, 4, 736);
			add_location(div, file, 33, 0, 699);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h3);
			append_dev(h3, t0);
			append_dev(div, t1);
			append_dev(div, video);
			append_dev(video, track);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*videos*/ 1 && t0_value !== (t0_value = /*video*/ ctx[1].titre + "")) set_data_dev(t0, t0_value);

			if (dirty & /*videos*/ 1 && video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) {
				attr_dev(video, "src", video_src_value);
			}

			if (dirty & /*videos*/ 1 && video_poster_value !== (video_poster_value = urlpApi + /*video*/ ctx[1].cover.url)) {
				attr_dev(video, "poster", video_poster_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(33:0) {#each videos as video}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let each_value = /*videos*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "container svelte-86c2or");
			add_location(div, file, 31, 0, 651);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, videos*/ 1) {
				each_value = /*videos*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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

const videoQuery = gql`
  query video {
        jpvideos(sort:"ordre:desc") {
            titre
            cover{
                url
            }
  	        video{
                  url
                }
  }
}
`;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: videoQuery });
	return { videos: results.data.jpvideos };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Video", slots, []);
	let { videos } = $$props;
	const writable_props = ["videos"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Video> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		videoQuery,
		preload,
		urlpApi,
		videos
	});

	$$self.$inject_state = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [videos];
}

class Video extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { videos: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Video",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*videos*/ ctx[0] === undefined && !("videos" in props)) {
			console.warn("<Video> was created without expected prop 'videos'");
		}
	}

	get videos() {
		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set videos(value) {
		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Video;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWExOGM5ZTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuXG5jb25zdCB2aWRlb1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB2aWRlbyB7XG4gICAgICAgIGpwdmlkZW9zKHNvcnQ6XCJvcmRyZTpkZXNjXCIpIHtcbiAgICAgICAgICAgIHRpdHJlXG4gICAgICAgICAgICBjb3ZlcntcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIH1cbiAgXHQgICAgICAgIHZpZGVve1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgfVxuICB9XG59XG5gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiB2aWRlb1F1ZXJ5LFxuICB9KTtcbiAgcmV0dXJuIHsgdmlkZW9zOiByZXN1bHRzLmRhdGEuanB2aWRlb3MgfTtcbn1cbmxldCB1cmxwQXBpID0gXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6XCI7XG48L3NjcmlwdD5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCB2aWRlb3M7XG48L3NjcmlwdD5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCB2aWRlb3MgYXMgdmlkZW99XG48ZGl2PlxuICAgIDxoMz57dmlkZW8udGl0cmV9PC9oMz5cbiAgICA8dmlkZW8gc3JjPSB7dXJscEFwaSArIHZpZGVvLnZpZGVvLnVybH0gY29udHJvbHMgcG9zdGVyPXt1cmxwQXBpICsgdmlkZW8uY292ZXIudXJsfSB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiAgLz5cbiAgICA8L3ZpZGVvPlxuPC9kaXY+XG57L2VhY2h9XG48L2Rpdj5cbjxzdHlsZT5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNjBweCAyMHB4IDAgMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgfVxuICB2aWRlb3tcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWtDUyxHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUNILE9BQU8sYUFBRyxHQUFLLElBQUMsS0FBSyxDQUFDLEdBQUc7O2tEQUFtQixPQUFPLGFBQUcsR0FBSyxJQUFDLEtBQUssQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2tFQUQ3RSxHQUFLLElBQUMsS0FBSzs7Z0VBQ0gsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7Ozs0RUFBbUIsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFIL0UsR0FBTTs7OztnQ0FBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFBQyxHQUFNOzs7OytCQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTdCQSxVQUFVLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7ZUFhQSxPQUFPO09BQ3JCLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWIsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxVQUFVO1VBRVYsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUTs7O0lBRXBDLE9BQU8sR0FBRywyQkFBMkI7Ozs7O09BRzFCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
