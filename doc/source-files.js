var sourcesIndex = JSON.parse('{\
"addr2line":["",[],["function.rs","lazy.rs","lib.rs"]],\
"adler":["",[],["algo.rs","lib.rs"]],\
"ahash":["",[],["convert.rs","fallback_hash.rs","lib.rs","operations.rs","random_state.rs","specialize.rs"]],\
"ariadne":["",[],["display.rs","draw.rs","lib.rs","source.rs","write.rs"]],\
"backtrace":["",[["backtrace",[],["dbghelp.rs","mod.rs"]],["symbolize",[],["dbghelp.rs","mod.rs"]]],["capture.rs","dbghelp.rs","lib.rs","print.rs","types.rs","windows.rs"]],\
"beef":["",[],["generic.rs","lean.rs","lib.rs","traits.rs","wide.rs"]],\
"cfg_if":["",[],["lib.rs"]],\
"chumsky":["",[],["blanket.rs","combinator.rs","container.rs","error.rs","extra.rs","input.rs","label.rs","lib.rs","primitive.rs","private.rs","recovery.rs","recursive.rs","span.rs","stream.rs","text.rs","util.rs"]],\
"color_eyre":["",[["section",[],["help.rs","mod.rs"]]],["config.rs","fmt.rs","handler.rs","lib.rs","private.rs","writers.rs"]],\
"derive_new":["",[],["lib.rs"]],\
"either":["",[],["lib.rs"]],\
"eyre":["",[],["backtrace.rs","chain.rs","context.rs","error.rs","fmt.rs","kind.rs","lib.rs","macros.rs","wrapper.rs"]],\
"fnv":["",[],["lib.rs"]],\
"gimli":["",[["read",[],["abbrev.rs","addr.rs","aranges.rs","cfi.rs","dwarf.rs","endian_slice.rs","index.rs","lazy.rs","line.rs","lists.rs","loclists.rs","lookup.rs","mod.rs","op.rs","pubnames.rs","pubtypes.rs","reader.rs","rnglists.rs","str.rs","unit.rs","util.rs","value.rs"]]],["arch.rs","common.rs","constants.rs","endianity.rs","leb128.rs","lib.rs"]],\
"hashbrown":["",[["external_trait_impls",[],["mod.rs"]],["raw",[],["alloc.rs","bitmask.rs","mod.rs","sse2.rs"]]],["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]],\
"indenter":["",[],["lib.rs"]],\
"itertools":["",[["adaptors",[],["coalesce.rs","map.rs","mod.rs","multi_product.rs"]]],["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","duplicates_impl.rs","either_or_both.rs","exactly_one_err.rs","extrema_set.rs","flatten_ok.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","grouping_map.rs","impl_macros.rs","intersperse.rs","k_smallest.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peek_nth.rs","peeking_take_while.rs","permutations.rs","powerset.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","unziptuple.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]],\
"ivm":["",[["parser",[],["ast.rs","display.rs","flatten.rs","mod.rs"]]],["error.rs","inet.rs","inet_program.rs","lexer.rs","lib.rs","rule_book.rs","util.rs"]],\
"libc":["",[["windows",[["msvc",[],["mod.rs"]]],["mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"logos":["",[],["internal.rs","lexer.rs","lib.rs","source.rs"]],\
"logos_derive":["",[["generator",[],["context.rs","fork.rs","leaf.rs","mod.rs","rope.rs","tables.rs"]],["graph",[],["fork.rs","impls.rs","meta.rs","mod.rs","range.rs","regex.rs","rope.rs"]],["parser",[],["definition.rs","ignore_flags.rs","mod.rs","nested.rs","subpattern.rs","type_params.rs"]]],["error.rs","leaf.rs","lib.rs","mir.rs","util.rs"]],\
"memchr":["",[["memchr",[["x86",[],["mod.rs","sse2.rs"]]],["fallback.rs","iter.rs","mod.rs","naive.rs"]],["memmem",[["prefilter",[["x86",[],["mod.rs","sse.rs"]]],["fallback.rs","genericsimd.rs","mod.rs"]],["x86",[],["avx.rs","mod.rs","sse.rs"]]],["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]]],["cow.rs","lib.rs"]],\
"miniz_oxide":["",[["inflate",[],["core.rs","mod.rs","output_buffer.rs","stream.rs"]]],["lib.rs","shared.rs"]],\
"object":["",[["read",[["coff",[],["comdat.rs","file.rs","mod.rs","relocation.rs","section.rs","symbol.rs"]],["elf",[],["comdat.rs","compression.rs","dynamic.rs","file.rs","hash.rs","mod.rs","note.rs","relocation.rs","section.rs","segment.rs","symbol.rs","version.rs"]],["macho",[],["dyld_cache.rs","fat.rs","file.rs","load_command.rs","mod.rs","relocation.rs","section.rs","segment.rs","symbol.rs"]],["pe",[],["data_directory.rs","export.rs","file.rs","import.rs","mod.rs","relocation.rs","resource.rs","rich.rs","section.rs"]]],["any.rs","archive.rs","mod.rs","read_ref.rs","traits.rs","util.rs"]]],["archive.rs","common.rs","elf.rs","endian.rs","lib.rs","macho.rs","pe.rs","pod.rs"]],\
"once_cell":["",[],["imp_std.rs","lib.rs","race.rs"]],\
"owo_colors":["",[["colors",[],["css.rs","custom.rs","dynamic.rs","xterm.rs"]]],["colors.rs","combo.rs","dyn_colors.rs","dyn_styles.rs","lib.rs","styled_list.rs","styles.rs"]],\
"proc_macro2":["",[],["detection.rs","extra.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]],\
"psm":["",[],["lib.rs"]],\
"quote":["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]],\
"regex_syntax":["",[["ast",[],["mod.rs","parse.rs","print.rs","visitor.rs"]],["hir",[["literal",[],["mod.rs"]]],["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]],["unicode_tables",[],["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]]],["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]],\
"rustc_demangle":["",[],["legacy.rs","lib.rs","v0.rs"]],\
"stacker":["",[],["lib.rs"]],\
"syn":["",[["gen",[],["clone.rs"]]],["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","drops.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","gen_helper.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","ty.rs","verbatim.rs","whitespace.rs"]],\
"unicode_ident":["",[],["lib.rs","tables.rs"]],\
"unicode_width":["",[],["lib.rs","tables.rs"]],\
"winapi":["",[["km",[],["mod.rs"]],["shared",[],["basetsd.rs","cfg.rs","devpropdef.rs","guiddef.rs","ktmtypes.rs","minwindef.rs","mod.rs","ntdef.rs","ntstatus.rs","windef.rs"]],["ucrt",[],["mod.rs"]],["um",[["gl",[],["mod.rs"]]],["cfgmgr32.rs","fibersapi.rs","fileapi.rs","libloaderapi.rs","memoryapi.rs","minwinbase.rs","mod.rs","processthreadsapi.rs","reason.rs","winbase.rs","winnt.rs","winreg.rs"]],["vc",[],["excpt.rs","mod.rs","vadefs.rs","vcruntime.rs"]],["winrt",[],["mod.rs"]]],["lib.rs","macros.rs"]],\
"yansi":["",[],["color.rs","lib.rs","macros.rs","paint.rs","style.rs","windows.rs"]]\
}');
createSourceSidebar();