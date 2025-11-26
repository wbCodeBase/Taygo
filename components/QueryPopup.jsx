"use client"
import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import { X, Search } from "lucide-react";
import { showcaseData } from "@/data/showcaseData";
import { Button } from "@/components/ui/button";


function isColorDark(hexColor) {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

export function QueryPopup({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayIndex, setDisplayIndex] = useState(-1);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);


  // Memoize Fuse.js instance to prevent recreation on every render
  const fuse = useMemo(() => new Fuse(showcaseData, {
    keys: [
      { name: "tags", weight: 0.7 },
      { name: "query", weight: 0.3 },
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
  }), []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim().length < 3) {
      setDisplayIndex(-1);
      setImageError(false);
      setImageLoading(false);
      setSearching(false);
      setNoResults(false);
      return;
    }

    setSearching(true);
    setNoResults(false);

    const searchTimer = setTimeout(() => {
      const results = fuse.search(searchQuery);

      if (!results.length) {
        setDisplayIndex(-1);
        setImageError(false);
        setImageLoading(false);
        setSearching(false);
        setNoResults(true);
        return;
      }

      const matchIndex = showcaseData.findIndex(item => item.id === results[0].item.id);
      if (matchIndex !== displayIndex) {
        setDisplayIndex(matchIndex);
        setImageError(false);
        setImageLoading(true);
      }
      setSearching(false);
      setNoResults(false);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, fuse]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setDisplayIndex(-1);
    }
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentData = displayIndex >= 0 ? showcaseData[displayIndex] : null;

  const modalBgColor = currentData?.bgColor ?? "#006C5D";
  const isDark = isColorDark(modalBgColor);
  const textColor = isDark ? "text-white" : "text-gray-900";

  return (
    <>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 p-4"
        onClick={onClose}
        data-testid="modal-query-popup"
      >
        <div
          className="relative w-full max-w-6xl max-h-[90vh] flex flex-col rounded-sm shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden"
          style={{ backgroundColor: modalBgColor }}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-6 right-6 z-20 ${textColor === "text-white" ? "text-white hover:bg-white/20" : "text-gray-900 hover:bg-black/10"}`}
            onClick={onClose}
            data-testid="button-close-popup"
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="sticky top-0 z-10 px-6 md:px-8 pt-6 md:pt-8 pb-6" style={{ backgroundColor: modalBgColor }}>
            <div className="max-w-3xl mx-auto">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 pr-12 ${textColor}`}>
                Your Intelligent Mortgage Assistant
              </h2>
              <div
                className={`relative bg-white rounded-sm shadow-lg border transition-all duration-500 ${currentData ? currentData.borderColor : "border-gray-300"
                  }`}
              >
                <div className="flex items-center gap-3 px-5 py-3.5">
                  <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-lg text-gray-900 outline-none placeholder:text-gray-400"
                    placeholder="Search mortgage leads, borrowers, loans, pipeline..."
                    data-testid="input-search-query"
                    autoFocus
                  />
                </div>
              </div>
              <div className={`mt-3 space-y-1 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                <p className="text-xs font-medium">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSearchQuery("How can i create workflow")}
                    className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${isDark
                      ? "bg-white/10 hover:bg-white/20 text-white/90"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    data-testid="suggestion-leads"
                  >
                    How can i create workflow
                  </button>
                  <button
                    onClick={() => setSearchQuery("Show history of any lead")}
                    className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${isDark
                      ? "bg-white/10 hover:bg-white/20 text-white/90"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    data-testid="suggestion-borrowers"
                  >
                    Show history of any lead
                  </button>
                  <button
                    onClick={() => setSearchQuery("How lead enrichment works")}
                    className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${isDark
                      ? "bg-white/10 hover:bg-white/20 text-white/90"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    data-testid="suggestion-refinancing"
                  >
                    How lead enrichment works
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8">
            {searching ? (
              <div className="py-16 text-center">
                <div className="max-w-md mx-auto">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-current mx-auto mb-4 opacity-30" style={{ color: textColor === "text-white" ? "#ffffff" : "#1f2937" }}></div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Searching...</h3>
                  <p className={textColor === "text-white" ? "text-white/70" : "text-gray-600"}>
                    Finding the best match for your query
                  </p>
                </div>
              </div>
            ) : noResults ? (
              <div className="py-16 text-center">
                <div className="max-w-md mx-auto">
                  <div className={`text-6xl mb-4 ${textColor === "text-white" ? "opacity-30" : "opacity-20"}`}>🔍</div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>No Results Found</h3>
                  <p className={textColor === "text-white" ? "text-white/70" : "text-gray-600"}>
                    We couldn't find any matches for "{searchQuery}"
                  </p>
                  <p className={`text-sm mt-3 ${textColor === "text-white" ? "text-white/60" : "text-gray-500"}`}>
                    Try different keywords or use the suggestions above
                  </p>
                </div>
              </div>
            ) : currentData ? (
              <div key={currentData.id} className="md:pt-14 md:pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="max-w-5xl mx-auto">
                  <div className="relative w-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-white/20 rounded-sm shadow-sm -translate-y-9 pointer-events-none z-0" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[87%] h-full bg-white/35 rounded-sm shadow-md -translate-y-6 pointer-events-none z-[1]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] h-full bg-white/50 rounded-sm shadow-lg -translate-y-3 pointer-events-none z-[2]" />

                    <div
                      className="relative rounded-sm overflow-hidden shadow-2xl bg-white w-full z-[3]"
                      data-testid={`showcase-image-${currentData.id}`}
                    >
                      {imageLoading && !imageError && (
                        <div className="flex items-center justify-center bg-gray-50 min-h-[400px] w-full">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading image...</p>
                          </div>
                        </div>
                      )}

                      {imageError ? (
                        <div className="flex items-center justify-center bg-gray-50 p-8 min-h-[400px] w-full">
                          <div className="text-center max-w-md">
                            <div className="text-6xl mb-4">📷</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Image Not Available</h3>
                            <p className="text-gray-600 mb-4">
                              We couldn't load the image for this feature.
                            </p>
                            <p className="text-sm text-gray-500 italic">
                              {currentData.query}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={`${currentData.image}`}
                          alt={currentData.query}
                          className="w-full h-auto"
                          onLoad={() => setImageLoading(false)}
                          onError={() => {
                            setImageError(true);
                            setImageLoading(false);
                          }}
                          data-testid="showcase-image"
                        />
                      )}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className={`text-sm ${textColor === "text-white" ? "text-white/90" : "text-gray-700"}`}>
                      {currentData.query}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="max-w-md mx-auto">
                  <Search className={`h-16 w-16 mx-auto mb-4 ${textColor === "text-white" ? "text-white/30" : "text-gray-400"}`} />
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Start Your Search</h3>
                  <p className={textColor === "text-white" ? "text-white/70" : "text-gray-600"}>
                    Type at least 3 characters to see intelligent search results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


    </>
  );
}
