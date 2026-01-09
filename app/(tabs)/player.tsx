import { Ionicons } from "@expo/vector-icons";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function PlayerScreen() {
  return (
    <View className="flex-1 bg-[#0f1f17] items-center">
      <StatusBar barStyle="light-content" />

      {/* ================= HEADER ================= */}
      <View className="w-full flex-row items-center justify-between px-4 pt-6">
        <Ionicons name="chevron-down" size={26} color="white" />

        <Text className="text-gray-300 text-xs tracking-widest">
          NOW PLAYING
        </Text>

        <Ionicons name="ellipsis-vertical" size={22} color="white" />
      </View>

      {/* ================= COVER ART ================= */}
      <View className="mt-10 w-72 h-72 rounded-3xl bg-[#111c16] items-center justify-center">
        {/* Outer shape */}
        <View className="w-56 h-56 border border-[#9c7a3c] rounded-full items-center justify-center">
          {/* Inner circle */}
          <View className="w-40 h-40 border border-[#9c7a3c] rounded-full items-center justify-center">
            <Text className="text-[#9c7a3c] text-4xl font-bold">ﷺ</Text>
          </View>
        </View>
      </View>

      {/* ================= TITLE & AUTHOR ================= */}
      <View className="mt-8 items-center px-6">
        <Text className="text-white text-xl font-bold text-center">
          The Year of Sorrow
        </Text>

        <Text className="text-gray-400 text-sm mt-2 text-center">
          Shaykh Muhammad Al-Yaqoubi
        </Text>
      </View>

      {/* ================= PROGRESS BAR ================= */}
      <View className="w-full px-6 mt-8">
        {/* Track */}
        <View className="h-1 bg-[#1f3a2a] rounded-full">
          {/* Progress */}
          <View className="w-1/3 h-1 bg-green-500 rounded-full" />
        </View>

        {/* Time */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-gray-400 text-xs">12:30</Text>
          <Text className="text-gray-400 text-xs">45:00</Text>
        </View>
      </View>

      {/* ================= CONTROLS ================= */}
      <View className="flex-row items-center justify-center mt-12 space-x-10">
        {/* Rewind */}
        <TouchableOpacity>
          <Ionicons
            className="px-3"
            name="play-back"
            size={26}
            color="#9ca3af"
          />
        </TouchableOpacity>

        {/* Play */}
        <TouchableOpacity className="w-16 h-16  bg-green-500 rounded-full items-center justify-center">
          <Ionicons name="play" size={30} color="black" />
        </TouchableOpacity>

        {/* Forward */}
        <TouchableOpacity>
          <Ionicons
            className="px-3"
            name="play-forward"
            size={26}
            color="#9ca3af"
          />
        </TouchableOpacity>
      </View>

      {/* ================= SPEED CONTROLS ================= */}
      <View className="flex-row mt-12 bg-[#132b1e] rounded-full px-3 py-2 space-x-2">
        {["0.75x", "1.0x", "1.25x", "1.5x"].map((speed) => (
          <View
            key={speed}
            className={`px-3 py-1 rounded-full ${
              speed === "1.0x" ? "bg-green-500" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-xs ${
                speed === "1.0x" ? "text-black font-semibold" : "text-gray-400"
              }`}
            >
              {speed}
            </Text>
          </View>
        ))}
      </View>

      {/* ================= BOTTOM ACTIONS ================= */}
      <View className="absolute bottom-6 left-0 right-0 flex-row justify-between px-10">
        <Ionicons name="share-social-outline" size={22} color="#9ca3af" />
        <Ionicons name="heart-outline" size={22} color="#9ca3af" />
      </View>
    </View>
  );
}
